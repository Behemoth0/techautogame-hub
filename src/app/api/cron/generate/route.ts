import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyD2StjlTDUoHwPvGMLQE2IDwZc9IEygsCQ';
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'sAKT4YkrVhMIRyMzpi7NniyMdsfyg2JAgrG6lt_1GDQ';
const CRON_SECRET = process.env.CRON_SECRET || 'techautogame-cron-2025';

// =================== TOPICS (all 9 categories) ===================
const TOPICS: Array<{ title: string; category: string }> = [
  // Tech
  { title: 'Best gaming laptops with RTX 4070 under $1500 in 2025', category: 'tech' },
  { title: 'Best budget smartphones under $400 in 2025', category: 'tech' },
  { title: 'Best mechanical keyboards for gaming 2025', category: 'tech' },
  { title: 'Best USB-C laptops for work and gaming 2025', category: 'tech' },
  // Auto
  { title: 'Best electric cars to buy in 2025 comparison', category: 'auto' },
  { title: 'Best dashcams with 4K recording in 2025', category: 'auto' },
  { title: 'Best car accessories on Amazon 2025', category: 'auto' },
  // Auto Safety
  { title: 'Top 10 safest cars of 2025: IIHS and NHTSA ratings', category: 'auto-safety' },
  { title: 'Best dash cams for car safety in 2025 under $150', category: 'auto-safety' },
  { title: 'Lane keep assist and blind spot systems: complete guide 2025', category: 'auto-safety' },
  // Auto News
  { title: 'Biggest car industry announcements of 2025', category: 'auto-news' },
  { title: 'Every new EV model coming in 2025 and 2026', category: 'auto-news' },
  { title: 'Formula 1 2025 season preview: teams and cars', category: 'auto-news' },
  // PC Hardware
  { title: 'RTX 5080 vs RX 9070 XT GPU benchmark comparison 2025', category: 'pc-hardware' },
  { title: 'Best gaming CPUs 2025: Intel Core Ultra vs AMD Ryzen 9000', category: 'pc-hardware' },
  { title: 'DDR5 RAM guide 2025: best kits for gaming and workstation', category: 'pc-hardware' },
  { title: 'Best NVMe SSDs of 2025: speed, reliability and price', category: 'pc-hardware' },
  // Gaming News
  { title: 'GTA 6: release date, platforms and gameplay leaks 2025', category: 'gaming-news' },
  { title: 'Most anticipated game releases of 2025', category: 'gaming-news' },
  { title: 'Best indie games of 2025 you probably missed', category: 'gaming-news' },
  // Gaming (Reviews)
  { title: 'Best gaming headsets for PS5 and PC in 2025', category: 'gaming' },
  { title: 'Top 10 best gaming monitors 144Hz 1440p 2025', category: 'gaming' },
  { title: 'PS5 Pro vs Xbox Series X: who wins in 2025', category: 'gaming' },
  // AI
  { title: 'ChatGPT vs Gemini vs Claude: which AI is best in 2025', category: 'ai' },
  { title: 'Best free AI tools that will change your workflow in 2025', category: 'ai' },
  { title: 'How AI is transforming game development in 2025', category: 'ai' },
  { title: 'GPT-5 release date, capabilities and what we know', category: 'ai' },
  // Memes
  { title: 'Funniest tech and gaming memes of 2025 that are too relatable', category: 'memes' },
  { title: 'Signs you spent way too much money on your PC build', category: 'memes' },
  { title: 'Things only car enthusiasts understand: the best memes', category: 'memes' },
  { title: 'When your GPU costs more than rent: AI and gamer memes 2025', category: 'memes' },
];

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim().slice(0, 80);
}

async function callGemini(prompt: string): Promise<string> {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 2048 },
      }),
    }
  );
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function getUnsplashImage(query: string, category: string): Promise<string> {
  const FALLBACKS: Record<string, string> = {
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
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      { headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
    );
    const data = await res.json();
    const photo = data.results?.[0];
    if (photo) return `${photo.urls.regular}&w=1200&q=80`;
  } catch {}
  return FALLBACKS[category] || FALLBACKS.tech;
}

function buildPrompt(topic: string, category: string): string {
  const isMeme = category === 'memes';
  const ctxMap: Record<string, string> = {
    tech: 'tech gadgets, laptops, smartphones, accessories',
    auto: 'cars, EVs, car accessories, automotive tech',
    gaming: 'gaming laptops, consoles, peripherals, video games',
    'auto-safety': 'car safety, ADAS, crash tests, dash cams, IIHS ratings',
    'auto-news': 'auto industry news, new car models, EV market, motorsport',
    'pc-hardware': 'PC hardware, CPUs, GPUs, RAM, SSDs, PC building',
    'gaming-news': 'game releases, gaming industry, esports, announcements',
    'ai': 'AI tools, LLMs, ChatGPT, Gemini, AI industry news',
    'memes': 'tech/gaming/car humor, relatable lists, pop culture',
  };
  const ctx = ctxMap[category] || ctxMap.tech;
  return isMeme
    ? `You are a funny tech content writer. Write a humorous, engaging meme-style article: "${topic}"
Context: ${ctx}
Length: 500-700 words, funny and relatable. Use ## subheadings with witty names.
Output ONLY valid JSON: {"title":"funny title","excerpt":"max 160 chars","tags":["memes","humor","tech"],"content":"## Intro\\n\\nContent..."}`
    : `You are an expert tech reviewer. Write a comprehensive SEO article: "${topic}"
Context: ${ctx}
Length: 700-900 words. Use ## subheadings. Include specific products with prices.
Output ONLY valid JSON: {"title":"SEO title","excerpt":"max 160 chars","tags":["tag1","tag2","tag3"],"content":"## Intro\\n\\nContent..."}`;
}

// In-memory store — rebuilt each Vercel deployment
// Real persistence: GitHub Actions commits files to repo
const generatedToday: Record<string, object> = {};

export async function GET(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const today = new Date().toISOString().split('T')[0];
  const results: object[] = [];

  // Pick one topic per category from TOPICS array (rotate by day of year)
  const dayOfYear = Math.floor(Date.now() / 86400000);
  const allCategories = ['tech', 'auto', 'gaming', 'auto-safety', 'auto-news', 'pc-hardware', 'gaming-news', 'ai', 'memes'];

  for (const category of allCategories) {
    const cacheKey = `${today}-${category}`;
    if (generatedToday[cacheKey]) {
      results.push(generatedToday[cacheKey]);
      continue;
    }

    const topicsForCat = TOPICS.filter(t => t.category === category);
    if (topicsForCat.length === 0) continue;
    const topic = topicsForCat[dayOfYear % topicsForCat.length].title;

    console.log(`[Cron] ${category}: "${topic}"`);

    try {
      const raw = await callGemini(buildPrompt(topic, category));
      const cleaned = raw.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      const article = JSON.parse(cleaned);
      const image = await getUnsplashImage(article.title, category);
      const slug = `${today}-${slugify(article.title)}`;

      const result = {
        slug, category, date: today, image,
        title: article.title, excerpt: article.excerpt,
        tags: article.tags, content: article.content,
        readTime: Math.max(3, Math.round((article.content || '').split(' ').length / 200)),
        isNew: true,
      };

      generatedToday[cacheKey] = result;
      results.push(result);
    } catch (err: any) {
      console.error(`[Cron] Failed ${category}: ${err.message}`);
    }

    // Rate limit: ~4s between calls
    await new Promise(r => setTimeout(r, 4000));
  }

  return NextResponse.json({
    success: true,
    date: today,
    generated: results.length,
    note: 'Articles stored in memory. For permanent storage, use GitHub Actions workflow which commits to repo.',
    articles: results.map((r: any) => ({ slug: r.slug, title: r.title, category: r.category })),
  });
}
