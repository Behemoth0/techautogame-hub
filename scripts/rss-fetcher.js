/**
 * RSS Fetcher — збирає трендові теми з 9 категорій
 * Запускається щодня автоматично через GitHub Actions
 */

const RSSParser = require('rss-parser');
const fs = require('fs');
const path = require('path');

const parser = new RSSParser({
  timeout: 15000,
  headers: { 'User-Agent': 'TechAutoGame-Hub/2.0 RSS Reader' },
});

// RSS джерела по всіх 9 категоріях
const RSS_FEEDS = {
  tech: [
    'https://techcrunch.com/feed/',
    'https://www.theverge.com/rss/index.xml',
    'https://www.engadget.com/rss.xml',
    'https://feeds.arstechnica.com/arstechnica/index',
  ],
  auto: [
    'https://www.motortrend.com/feeds/',
    'https://www.caranddriver.com/rss/all.xml/',
    'https://electrek.co/feed/',
    'https://www.autoblog.com/rss.xml',
  ],
  gaming: [
    'https://www.ign.com/articles.rss',
    'https://kotaku.com/rss',
    'https://www.pcgamer.com/rss/',
    'https://www.eurogamer.net/?format=rss',
  ],
  // ====== НОВІ КАТЕГОРІЇ ======
  'auto-safety': [
    'https://www.caranddriver.com/rss/all.xml/',
    'https://www.motortrend.com/feeds/',
    'https://www.autoblog.com/rss.xml',
    'https://www.automobilemag.com/feed/',
  ],
  'auto-news': [
    'https://www.autocar.co.uk/rss',
    'https://www.autoblog.com/rss.xml',
    'https://www.autoevolution.com/rss/news.xml',
    'https://www.motortrend.com/feeds/',
  ],
  'pc-hardware': [
    'https://www.tomshardware.com/feeds/all',
    'https://www.guru3d.com/feeds/news/',
    'https://www.anandtech.com/rss/news',
    'https://hexus.net/rss/',
  ],
  'gaming-news': [
    'https://www.gamespot.com/feeds/mashup/',
    'https://www.polygon.com/rss/index.xml',
    'https://www.vgc.com/feed/',
    'https://www.gameinformer.com/news.xml',
  ],
  'ai': [
    'https://venturebeat.com/category/ai/feed/',
    'https://www.artificialintelligence-news.com/feed/',
    'https://thenextweb.com/neural/feed/',
    'https://www.theverge.com/rss/ai-artificial-intelligence/index.xml',
  ],
  // Меми — немає публічних RSS → fallback теми (без RSS)
  'memes': [],
};

// Fallback теми коли RSS недоступний або для мемів
const FALLBACK_TOPICS = {
  tech: [
    { title: 'Best budget laptops under $500 in 2025', description: 'Top affordable laptops' },
    { title: 'Top 10 productivity apps of 2025', description: 'Must-have apps' },
  ],
  auto: [
    { title: 'Best electric vehicles to buy in 2025', description: 'EV comparison guide' },
    { title: 'Hybrid vs Electric: Which car is right for you?', description: '' },
  ],
  gaming: [
    { title: 'Best gaming setups and gear for 2025', description: '' },
    { title: 'Top new game releases of 2025 you must play', description: '' },
  ],
  'auto-safety': [
    { title: 'Top 10 safest cars of 2025: IIHS and NHTSA ratings', description: 'Safety ratings' },
    { title: 'Best dash cams for car safety in 2025', description: '' },
    { title: 'How modern car safety features save lives in 2025', description: '' },
    { title: 'Best blind spot monitors and lane assist systems 2025', description: '' },
  ],
  'auto-news': [
    { title: 'Biggest car industry news of March 2025', description: '' },
    { title: 'New car models announced for 2025-2026', description: '' },
    { title: 'EV market expands: what automakers planned for 2025', description: '' },
    { title: 'Formula 1 2025 season: teams, cars, expectations', description: '' },
  ],
  'pc-hardware': [
    { title: 'Best GPUs for gaming in 2025: RTX 5080 vs RX 9070', description: '' },
    { title: 'Best gaming CPUs 2025: Intel vs AMD comparison', description: '' },
    { title: 'DDR5 RAM guide: best kits for gaming and workstations 2025', description: '' },
    { title: 'Best NVMe SSDs of 2025: speed, price, and reliability', description: '' },
  ],
  'gaming-news': [
    { title: 'Most anticipated game releases of 2025', description: '' },
    { title: 'Best indie games of 2025 you missed', description: '' },
    { title: 'GTA 6 release date, platforms, and what we know', description: '' },
    { title: 'Best gaming chairs and peripherals for gamers 2025', description: '' },
  ],
  'ai': [
    { title: 'GPT-5 vs Gemini 2.0: which AI is smarter in 2025?', description: '' },
    { title: 'AI tools that will change your life in 2025', description: '' },
    { title: 'How AI is transforming the gaming industry in 2025', description: '' },
    { title: 'Best free AI image generators in 2025', description: '' },
  ],
  'memes': [
    { title: 'Funniest tech memes of 2025 that every gamer will understand', description: '' },
    { title: 'When your gaming PC costs more than your car: top memes', description: '' },
    { title: 'AI takes over the internet: best memes about artificial intelligence 2025', description: '' },
    { title: 'Car guys vs PC guys: the ultimate meme battle 2025', description: '' },
    { title: 'RTX 5090 owners memes: when GPU is more expensive than rent', description: '' },
  ],
};

async function fetchFeedSafe(url) {
  try {
    const feed = await parser.parseURL(url);
    return feed.items || [];
  } catch (err) {
    console.warn(`⚠️  Failed to fetch: ${url} — ${err.message}`);
    return [];
  }
}

async function fetchTrends() {
  console.log('🔍 Fetching trending topics from RSS feeds (9 categories)...\n');
  const results = {};

  for (const [category, feeds] of Object.entries(RSS_FEEDS)) {
    // Для мемів — одразу fallback
    if (feeds.length === 0) {
      results[category] = FALLBACK_TOPICS[category] || [];
      console.log(`😂 ${category.toUpperCase()}: using ${results[category].length} fallback meme topics`);
      continue;
    }

    const allItems = [];
    for (const feedUrl of feeds) {
      const items = await fetchFeedSafe(feedUrl);
      allItems.push(...items.slice(0, 5)); // топ 5 з кожного джерела
    }

    // Фільтруємо і сортуємо за датою
    const filtered = allItems
      .filter(item => item.title && item.title.length > 20)
      .sort((a, b) => new Date(b.pubDate || 0) - new Date(a.pubDate || 0))
      .slice(0, 3); // топ 3 теми для генерації

    // Якщо RSSне дав результатів — fallback
    if (filtered.length === 0) {
      results[category] = FALLBACK_TOPICS[category] || [];
      console.log(`📋 ${category.toUpperCase()}: RSS empty, using ${results[category].length} fallback topics`);
    } else {
      results[category] = filtered.map(item => ({
        title: item.title,
        description: item.contentSnippet || item.summary || '',
        link: item.link,
        pubDate: item.pubDate,
      }));
      console.log(`📰 ${category.toUpperCase()}: знайдено ${results[category].length} тем`);
      results[category].forEach((t, i) => console.log(`  ${i + 1}. ${t.title}`));
    }
    console.log('');
  }

  // Зберігаємо в тимчасовий файл для generate-content.js
  const outputPath = path.join(process.cwd(), 'scripts', 'trends.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`✅ Trends saved to ${outputPath}`);
  console.log(`📊 Categories: ${Object.keys(results).join(', ')}`);

  return results;
}

// Запуск
fetchTrends().catch(console.error);
