/**
 * AI Content Generator v2 — генерує статті для 9 категорій
 * API Key: Gemini 1.5 Flash (безкоштовний tier)
 * 
 * Запуск: node scripts/generate-content.js
 * Автоматичний запуск: щодня через GitHub Actions
 */

'use strict';
const https = require('https');
const fs = require('fs');
const path = require('path');

// =================== КОНФІГ ===================
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyD2StjlTDUoHwPvGMLQE2IDwZc9IEygsCQ';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'sAKT4YkrVhMIRyMzpi7NniyMdsfyg2JAgrG6lt_1GDQ';
const AMAZON_TAG = process.env.AMAZON_TAG || 'techautogame-20';
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

// Переконуємось що директорія існує
if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });

// =================== УТИЛІТИ ===================
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .slice(0, 80);
}

function estimateReadTime(text) {
  return Math.max(3, Math.round(text.split(' ').length / 200));
}

function getDate() {
  return new Date().toISOString().split('T')[0];
}

// =================== GEMINI API ===================
function callGemini(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.8,
        maxOutputTokens: 2048,
        topK: 40,
        topP: 0.95,
      },
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
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

// =================== UNSPLASH API ===================
function getUnsplashImage(query, category) {
  return new Promise((resolve) => {
    const searchQuery = encodeURIComponent(`${query} ${category}`);
    const options = {
      hostname: 'api.unsplash.com',
      path: `/search/photos?query=${searchQuery}&per_page=1&orientation=landscape`,
      method: 'GET',
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const photo = parsed.results?.[0];
          if (photo) {
            resolve(`${photo.urls.regular}&w=1200&q=80`);
          } else {
            resolve(getFallbackImage(category));
          }
        } catch {
          resolve(getFallbackImage(category));
        }
      });
    });
    req.on('error', () => resolve(getFallbackImage(category)));
    req.end();
  });
}

function getFallbackImage(category) {
  const fallbacks = {
    tech:          'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    auto:          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80',
    gaming:        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80',
    'auto-safety': 'https://images.unsplash.com/photo-1553260188-75a8d6205b6e?w=1200&q=80',
    'auto-news':   'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    'pc-hardware': 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=1200&q=80',
    'gaming-news': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
    'ai':          'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    'memes':       'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=1200&q=80',
  };
  return fallbacks[category] || fallbacks.tech;
}

// =================== ПРОМПТИ ===================
const CAT_CONTEXT = {
  tech: 'technology gadgets, laptops, smartphones, software, accessories',
  auto: 'cars, automotive technology, electric vehicles, car accessories, driving',
  gaming: 'gaming laptops, consoles, gaming peripherals, video games, gaming gear',
  'auto-safety': 'car safety systems, ADAS features, crash tests, NCAP/IIHS ratings, dash cams, blind spot monitors, lane keep assist, emergency braking',
  'auto-news': 'automotive industry news, new car models, EV market, auto manufacturers, car launches, motorsport, Formula 1',
  'pc-hardware': 'PC hardware, CPUs, GPUs, RAM, SSDs, motherboards, cooling, PC building, benchmarks, RTX, Radeon, Intel, AMD',
  'gaming-news': 'new game releases, game announcements, gaming industry news, upcoming games, game reviews, DLC, game updates, esports',
  'ai': 'artificial intelligence, machine learning, AI models, ChatGPT, Gemini, Claude, AI tools, LLMs, neural networks, AI industry news',
  'memes': 'funny tech humor, gaming memes, PC building humor, car enthusiast jokes, AI jokes, internet culture',
};

function buildArticlePrompt(topic, category) {
  if (category === 'memes') {
    return `You are a funny tech/gaming content writer for a blog called TechAutoGame Hub.

Write a hilarious, entertaining article about: "${topic}"
Category: Memes & Tech Humor

Requirements:
1. Title: Funny, clickbait-style but honest (include 2025 where relevant)  
2. Article body: 600-900 words - funny, ironic, relatable humor
3. Use ## subheadings with funny names
4. Include real products/brands in humorous contexts
5. End with "Bottom Line" that's funny but gives real advice
6. Tone: Like a Reddit tech post — snarky, self-aware, funny
7. Include 3-5 numbered lists of funny observations

Output FORMAT (strictly follow this JSON):
{
  "title": "Your funny SEO-optimized title here",
  "excerpt": "One funny, compelling sentence (max 160 chars)",
  "tags": ["memes", "humor", "tech", "gaming"],
  "content": "## Introduction\\n\\nYour full funny article here with ## subheadings...\\n\\n## Bottom Line\\n\\nFinal funny verdict"
}

Output ONLY valid JSON, no markdown blocks, no extra text.`;
  }

  return `You are an expert writer for a technology/auto/gaming review blog called TechAutoGame Hub.

Write a comprehensive, SEO-optimized article about: "${topic}"
Category: ${category} (${CAT_CONTEXT[category]})

Requirements:
1. Title: Catchy, SEO-friendly (include year 2025 where relevant)
2. Article body: 800-1200 words in ENGLISH
3. Structure with ## subheadings
4. Include specific product recommendations with approximate prices
5. Include a "Bottom Line" / "Our Verdict" section at the end
6. Natural, engaging writing style (not AI-sounding)
7. Mention 3-5 specific products/models with real prices

Output FORMAT (strictly follow this JSON):
{
  "title": "Your SEO-optimized title here",
  "excerpt": "One compelling sentence (max 160 chars) summarizing the article",
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "content": "## Introduction\\n\\nYour full article content here with ## subheadings...\\n\\n## Conclusion\\n\\nFinal verdict"
}

Output ONLY valid JSON, no markdown blocks, no extra text.`;
}

function buildUkrainianPrompt(englishTitle, englishContent) {
  return `Translate this tech article title and excerpt to Ukrainian language. Keep it natural and engaging.

Title: ${englishTitle}
Content preview: ${englishContent.slice(0, 300)}

Output FORMAT (valid JSON only):
{
  "titleUk": "Ukrainian translation of title",
  "excerptUk": "Ukrainian translation of excerpt (max 160 chars)"
}

Output ONLY valid JSON, nothing else.`;
}

// =================== ГЕНЕРАТОР ===================
async function generateArticle(topicData, category) {
  console.log(`\n📝 Generating article for: "${topicData.title}"`);
  console.log(`   Category: ${category}`);

  let articleData;
  try {
    const rawResponse = await callGemini(buildArticlePrompt(topicData.title, category));
    // Очищаємо можливі markdown-огортки
    const cleaned = rawResponse.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    articleData = JSON.parse(cleaned);
  } catch (err) {
    console.error(`   ❌ Gemini generation failed: ${err.message}`);
    return null;
  }

  const { title, excerpt, tags, content } = articleData;
  console.log(`   ✅ Generated: "${title}"`);

  // Отримуємо переклад українською
  let titleUk = title;
  let excerptUk = excerpt;
  try {
    const ukRaw = await callGemini(buildUkrainianPrompt(title, content));
    const ukCleaned = ukRaw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const ukData = JSON.parse(ukCleaned);
    titleUk = ukData.titleUk || title;
    excerptUk = ukData.excerptUk || excerpt;
    console.log(`   🇺🇦 Ukrainian title: "${titleUk}"`);
  } catch {
    console.warn('   ⚠️  Ukrainian translation failed, using English');
  }

  // Отримуємо зображення з Unsplash
  const image = await getUnsplashImage(title, category);
  console.log(`   🖼️  Image: ${image.slice(0, 60)}...`);

  const slug = slugify(title);
  const date = getDate();
  const readTime = estimateReadTime(content);

  // Формуємо MDX файл з frontmatter
  const mdxContent = `---
title: "${title.replace(/"/g, '\\"')}"
titleUk: "${titleUk.replace(/"/g, '\\"')}"
excerpt: "${excerpt.replace(/"/g, '\\"')}"
excerptUk: "${excerptUk.replace(/"/g, '\\"')}"
category: ${category}
date: ${date}
image: "${image}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
readTime: ${readTime}
isNew: true
amazonTag: "${AMAZON_TAG}"
---

${content}
`;

  const filename = `${date}-${slug}.md`;
  const filePath = path.join(POSTS_DIR, filename);
  fs.writeFileSync(filePath, mdxContent, 'utf8');
  console.log(`   💾 Saved: content/posts/${filename}`);

  return { slug, title, category, filename };
}

// =================== ГОЛОВНА ФУНКЦІЯ ===================
async function main() {
  console.log('🚀 TechAutoGame Hub — AI Content Generator v2');
  console.log('==============================================\n');
  console.log('📦 Categories: tech, auto, gaming, auto-safety, auto-news, pc-hardware, gaming-news, ai, memes\n');

  // Читаємо тренди з RSS fetcher
  const trendsPath = path.join(process.cwd(), 'scripts', 'trends.json');
  let trends = {};

  if (fs.existsSync(trendsPath)) {
    trends = JSON.parse(fs.readFileSync(trendsPath, 'utf8'));
    console.log('📊 Loaded trends from trends.json\n');
  } else {
    // Фолбек теми якщо RSS не запускався
    console.log('⚠️  No trends.json found. Using fallback topics.\n');
    trends = {
      tech:          [{ title: 'Best laptops for productivity and gaming in 2025', description: '' }],
      auto:          [{ title: 'Best electric vehicles to buy in 2025', description: '' }],
      gaming:        [{ title: 'Best gaming setups and gear for 2025', description: '' }],
      'auto-safety': [{ title: 'Top 10 safest cars of 2025: IIHS and NHTSA ratings', description: '' }],
      'auto-news':   [{ title: 'Biggest car industry news of 2025', description: '' }],
      'pc-hardware': [{ title: 'Best GPUs for gaming in 2025: RTX 5080 vs RX 9070', description: '' }],
      'gaming-news': [{ title: 'Most anticipated game releases of 2025', description: '' }],
      'ai':          [{ title: 'GPT-5 vs Gemini 2.0: which AI is smarter in 2025?', description: '' }],
      'memes':       [{ title: 'Funniest tech memes of 2025 that every gamer will understand', description: '' }],
    };
  }

  const generated = [];
  const categories = Object.keys(trends);

  // Генеруємо по 1 статті на категорію (до 9 на день)
  for (const category of categories) {
    const topicList = trends[category];
    if (!topicList || topicList.length === 0) continue;

    // Вибираємо першу тему з списку
    const topic = topicList[0];

    // Затримка між запитами щоб не перевищити rate limit Gemini (15 req/хв = ~1 req/4 сек)
    if (generated.length > 0) {
      const delay = 12000; // 12 секунд між категоріями (безпечно для free tier)
      console.log(`\n⏳ Waiting ${delay / 1000}s (Gemini rate limit)...`);
      await new Promise(r => setTimeout(r, delay));
    }

    const result = await generateArticle(topic, category);
    if (result) generated.push(result);
  }

  console.log(`\n✨ Done! Generated ${generated.length} articles:`);
  generated.forEach(a => console.log(`  - [${a.category}] ${a.title}`));

  if (generated.length > 0) {
    console.log('\n🎉 Content generation complete! Deploy will trigger automatically via GitHub Actions.');
  }
}

main().catch(console.error);
