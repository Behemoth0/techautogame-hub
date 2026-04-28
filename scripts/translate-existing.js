const fs = require('fs');
const path = require('path');
const https = require('https');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

if (!GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing from environment variables!");
  process.exit(1);
}

function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
      },
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.candidates?.[0]?.content?.parts?.[0]?.text) {
            resolve(parsed.candidates[0].content.parts[0].text);
          } else {
            reject(new Error(`Gemini error: ${JSON.stringify(parsed)}`));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function buildUkrainianPrompt(englishTitle, englishExcerpt, englishContent) {
  return `Translate this tech article title, excerpt, and the full content to Ukrainian language. Keep it natural and engaging. Make sure to preserve all Markdown formatting (## subheadings, lists, bold text, etc.) in the content translation.

Title: ${englishTitle}
Excerpt: ${englishExcerpt}
Content: ${englishContent}

Output FORMAT (valid JSON only):
{
  "titleUk": "Ukrainian translation of title",
  "excerptUk": "Ukrainian translation of excerpt (max 160 chars)",
  "contentUk": "Ukrainian translation of the full content"
}

Output ONLY valid JSON, nothing else.`;
}

async function translateFile(filePath) {
  const contentRaw = fs.readFileSync(filePath, 'utf8');
  
  if (contentRaw.includes('---UK---')) {
    console.log(`⏩ Skipping ${path.basename(filePath)} (Already has UK translation)`);
    return;
  }

  // Parse frontmatter
  const match = contentRaw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.log(`⚠️ Could not parse frontmatter for ${path.basename(filePath)}`);
    return;
  }

  let frontmatter = match[1];
  const markdownContent = match[2].trim();

  // Extract title and excerpt
  const titleMatch = frontmatter.match(/title:\s*"(.*?)"/);
  const excerptMatch = frontmatter.match(/excerpt:\s*"(.*?)"/);
  
  const title = titleMatch ? titleMatch[1] : '';
  const excerpt = excerptMatch ? excerptMatch[1] : '';

  if (!title || !markdownContent) {
    console.log(`⚠️ Missing title or content for ${path.basename(filePath)}`);
    return;
  }

  console.log(`\n🇺🇦 Translating: ${title}`);
  try {
    const prompt = buildUkrainianPrompt(title, excerpt, markdownContent);
    const ukRaw = await callGemini(prompt);
    const ukCleaned = ukRaw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const ukData = JSON.parse(ukCleaned);

    const titleUk = ukData.titleUk || title;
    const excerptUk = ukData.excerptUk || excerpt;
    const contentUk = ukData.contentUk || markdownContent;

    // Update frontmatter
    let newFrontmatter = frontmatter;
    if (!newFrontmatter.includes('titleUk:')) {
      newFrontmatter = newFrontmatter.replace(`title: "${title}"`, `title: "${title}"\ntitleUk: "${titleUk.replace(/"/g, '\\"')}"`);
    }
    if (!newFrontmatter.includes('excerptUk:')) {
      newFrontmatter = newFrontmatter.replace(`excerpt: "${excerpt}"`, `excerpt: "${excerpt}"\nexcerptUk: "${excerptUk.replace(/"/g, '\\"')}"`);
    }

    const newFileContent = `---
${newFrontmatter}
---

${markdownContent}

---UK---

${contentUk}
`;

    fs.writeFileSync(filePath, newFileContent, 'utf8');
    console.log(`✅ Updated ${path.basename(filePath)}`);

  } catch (err) {
    console.error(`❌ Failed to translate ${path.basename(filePath)}:`, err.message);
  } finally {
    // Wait a bit to avoid hitting rate limits on Gemini
    await new Promise(r => setTimeout(r, 6000));
  }
}

async function main() {
  if (!fs.existsSync(POSTS_DIR)) {
    console.log("No posts directory found.");
    return;
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  console.log(`Found ${files.length} articles.`);

  for (const file of files) {
    await translateFile(path.join(POSTS_DIR, file));
  }
  console.log("\n🎉 Translation complete!");
}

main().catch(console.error);
