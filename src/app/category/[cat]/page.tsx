import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard, { Article } from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';
import { getPostsByCategory } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const CATEGORY_META: Record<string, { emoji: string; title: string; description: string; color: string }> = {
  tech: {
    emoji: '🔧',
    title: 'Technology Reviews',
    description: 'Latest tech gadgets, laptops, phones, and accessories reviewed and rated.',
    color: '#6366f1',
  },
  auto: {
    emoji: '🚗',
    title: 'Automotive Reviews',
    description: 'Car reviews, dashcams, accessories, and everything automotive.',
    color: '#f59e0b',
  },
  gaming: {
    emoji: '🎮',
    title: 'Gaming Reviews',
    description: 'Gaming laptops, consoles, peripherals, and gear reviewed.',
    color: '#10b981',
  },
  'auto-safety': {
    emoji: '🛡️',
    title: 'Auto Safety',
    description: 'Car safety ratings, ADAS tech, dash cams, crash tests and everything to keep you safe on the road.',
    color: '#ef4444',
  },
  'auto-news': {
    emoji: '🚘',
    title: 'Auto Industry News',
    description: 'Latest news from the automotive world — new models, EV market, motorsport and manufacturer updates.',
    color: '#f97316',
  },
  'pc-hardware': {
    emoji: '💻',
    title: 'PC Hardware',
    description: 'GPUs, CPUs, RAM, SSDs, cooling and everything you need to build or upgrade your PC in 2025.',
    color: '#06b6d4',
  },
  'gaming-news': {
    emoji: '🕹️',
    title: 'Gaming News',
    description: 'New game releases, announcements, updates, esports and everything happening in gaming.',
    color: '#a855f7',
  },
  ai: {
    emoji: '🧠',
    title: 'AI & Machine Learning',
    description: 'Latest AI tools, news and how artificial intelligence is shaping the future.',
    color: '#8b5cf6',
  },
  memes: {
    emoji: '😂',
    title: 'Tech Memes & Fun',
    description: 'Relatable tech, gaming and car humor. For when you need a laugh.',
    color: '#ec4899',
  },
};

// Demo articles per category
const DEMO_BY_CATEGORY: Record<string, Article[]> = {
  tech: [
    { slug: 'apple-m4-macbook-pro-review', title: 'Apple M4 MacBook Pro Review: The Chip That Changes Everything', excerpt: 'Apple\'s M4 chip delivers extraordinary performance. But is the MacBook Pro worth $1999 in 2025?', category: 'tech', date: '2025-03-10', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80', readTime: 10 },
    { slug: 'best-mechanical-keyboards-2025', title: 'Best Mechanical Keyboards 2025: For Gaming & Productivity', excerpt: 'From RGB gaming boards to silent office switches — we tested 20 mechanical keyboards.', category: 'tech', date: '2025-03-07', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80', readTime: 9 },
    { slug: 'samsung-galaxy-s25-ultra-review', title: 'Samsung Galaxy S25 Ultra: Is It Worth $1,299?', excerpt: 'The S25 Ultra brings AI-powered features and the best camera system Samsung has ever made.', category: 'tech', date: '2025-03-05', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80', readTime: 8, isHot: true },
  ],
  auto: [
    { slug: 'tesla-model-3-highland-review', title: 'Tesla Model 3 Highland Review: Is the Refresh Worth It?', excerpt: 'The refreshed Tesla Model 3 "Highland" brings a new interior, improved range, and updated tech.', category: 'auto', date: '2025-03-11', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', readTime: 6, isNew: true },
    { slug: 'best-budget-dashcams-2025', title: 'Best Budget Dashcams Under $100 in 2025', excerpt: 'Protect yourself on the road without breaking the bank. These 5 dashcams offer great quality.', category: 'auto', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80', readTime: 5 },
    { slug: 'best-ev-2025-comparison', title: 'Best Electric Cars 2025: Tesla vs Rivian vs BMW i4', excerpt: 'Electric vehicles are better than ever. We compare the top EVs of 2025 across range, features, and value.', category: 'auto', date: '2025-03-03', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80', readTime: 12 },
  ],
  gaming: [
    { slug: 'best-gaming-laptops-2025', title: 'Best Gaming Laptops 2025: RTX 4070 vs 4080', excerpt: 'We tested 12 gaming laptops to find the best value.', category: 'gaming', date: '2025-03-12', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80', readTime: 8, isHot: true },
    { slug: 'ps5-pro-vs-xbox-series-x', title: 'PS5 Pro vs Xbox Series X: Who Wins in 2025?', excerpt: "Sony's PS5 Pro finally launched. We compare raw power, exclusives, and value.", category: 'gaming', date: '2025-03-09', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80', readTime: 7, isHot: true },
    { slug: 'best-gaming-headsets-2025', title: 'Best Gaming Headsets 2025: Sound That Immerses You', excerpt: 'Spatial audio, noise cancellation and comfort: we tested 15 gaming headsets.', category: 'gaming', date: '2025-03-06', image: 'https://images.unsplash.com/photo-1612888176629-9ab30f27f7b4?w=600&q=80', readTime: 7 },
  ],
  'auto-safety': [
    { slug: 'safest-cars-2025-iihs-nhtsa', title: 'Top 10 Safest Cars of 2025: IIHS & NHTSA Ratings', excerpt: 'From ADAS to 5-star crash ratings — these cars will protect you and your family best in 2025.', category: 'auto-safety', date: '2025-03-12', image: 'https://images.unsplash.com/photo-1553260188-75a8d6205b6e?w=600&q=80', readTime: 7, isHot: true },
    { slug: 'best-dash-cams-car-safety-2025', title: 'Best Dash Cams for Car Safety in 2025 — Under $150', excerpt: 'Protect yourself on the road. These 4K dash cams record everything with clear night vision.', category: 'auto-safety', date: '2025-03-10', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80', readTime: 5, isNew: true },
    { slug: 'lane-assist-blind-spot-guide', title: 'Lane Assist & Blind Spot Monitors: Which Cars Have the Best Systems?', excerpt: 'Modern ADAS can prevent accidents before they happen. Here is a full guide to active safety systems.', category: 'auto-safety', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80', readTime: 8 },
  ],
  'auto-news': [
    { slug: 'biggest-car-news-march-2025', title: 'Biggest Car Industry News of March 2025', excerpt: 'Formula E, new EV launches, and manufacturer shakeups — here is everything that happened this month.', category: 'auto-news', date: '2025-03-14', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', readTime: 6, isNew: true },
    { slug: 'new-ev-models-2025-2026', title: 'Every New EV Model Announced for 2025-2026', excerpt: 'From affordable city cars to luxury SUVs — here are all the electric vehicles coming your way.', category: 'auto-news', date: '2025-03-10', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80', readTime: 9 },
    { slug: 'formula-1-2025-season-preview', title: 'Formula 1 2025: Teams, Cars, Expectations & Predictions', excerpt: 'The 2025 F1 season brings new regulations. Here is what to expect from each team.', category: 'auto-news', date: '2025-03-07', image: 'https://images.unsplash.com/photo-1597404294360-feeeda04612e?w=600&q=80', readTime: 10, isHot: true },
  ],
  'pc-hardware': [
    { slug: 'rtx-5080-vs-rx-9070-xt-2025', title: 'RTX 5080 vs RX 9070 XT: The GPU War of 2025', excerpt: 'NVIDIA vs AMD — we benchmark both flagship GPUs to find who dominates in 2025.', category: 'pc-hardware', date: '2025-03-13', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&q=80', readTime: 10, isHot: true },
    { slug: 'best-gaming-cpus-2025-intel-amd', title: 'Best Gaming CPUs 2025: Intel Core Ultra vs AMD Ryzen 9000', excerpt: 'We tested 8 processors for gaming and content creation to find the best CPU for every budget.', category: 'pc-hardware', date: '2025-03-11', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80', readTime: 9 },
    { slug: 'ddr5-ram-guide-2025', title: 'DDR5 RAM in 2025: Best Kits, Speeds, and What Actually Matters', excerpt: 'More MHz is not always better. Here is what you really need to know about DDR5 RAM in 2025.', category: 'pc-hardware', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1631378975044-4d1b0e5d7e3b?w=600&q=80', readTime: 7, isNew: true },
  ],
  'gaming-news': [
    { slug: 'gta-6-release-date-everything-we-know', title: 'GTA 6: Release Date, Platforms, Gameplay — Everything We Know', excerpt: 'Rockstar\'s most anticipated game ever is coming. Here is the complete guide to GTA 6.', category: 'gaming-news', date: '2025-03-13', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80', readTime: 8, isHot: true },
    { slug: 'most-anticipated-games-2025', title: 'Most Anticipated Games of 2025 You Cannot Miss', excerpt: 'From action RPGs to open worlds — these are the games every gamer is waiting for in 2025.', category: 'gaming-news', date: '2025-03-11', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80', readTime: 7, isNew: true },
    { slug: 'best-indie-games-2025', title: 'Best Indie Games of 2025 You Probably Missed', excerpt: 'The biggest studios dominate the headlines, but indie developers are making the best games of 2025.', category: 'gaming-news', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80', readTime: 6 },
  ],
  ai: [
    { slug: 'best-ai-tools-2025', title: 'Best AI Tools That Will Change Your Life in 2025', excerpt: 'From writing to image generation to coding — these AI tools will supercharge your productivity.', category: 'ai', date: '2025-03-12', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80', readTime: 7, isHot: true },
    { slug: 'chatgpt-vs-gemini-vs-claude', title: 'ChatGPT vs Gemini vs Claude: Which AI Is Best in 2025?', excerpt: 'We tested all three leading AI chatbots for coding, writing, and reasoning tasks.', category: 'ai', date: '2025-03-10', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80', readTime: 9, isNew: true },
    { slug: 'ai-in-gaming-2025', title: 'How AI Is Transforming Game Development in 2025', excerpt: 'From procedural generation to NPC behavior — AI is completely changing how games are made.', category: 'ai', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1534723452862-4c874986df8f?w=600&q=80', readTime: 6 },
  ],
  memes: [
    { slug: 'gamer-problems-relatable-2025', title: '15 Gamer Problems That Are Too Relatable 😂', excerpt: 'From internet outages during ranked matches to RGB lighting that costs more than the CPU — we feel you.', category: 'memes', date: '2025-03-12', image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80', readTime: 4, isHot: true },
    { slug: 'pc-builder-struggles', title: 'Signs You Spent Too Much on Your PC Build 💀', excerpt: "Your keyboard costs more than your friend's entire setup and you're not even sorry.", category: 'memes', date: '2025-03-10', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80', readTime: 3 },
    { slug: 'car-owner-memes-2025', title: 'Things That Hit Different When You Own a Fast Car 🚗💨', excerpt: 'The relationship between a driver and their car is something non-car people will never understand.', category: 'memes', date: '2025-03-08', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80', readTime: 3 },
  ],
};

interface Props {
  params: { cat: string };
}

export async function generateStaticParams() {
  return ['tech', 'auto', 'gaming', 'auto-safety', 'auto-news', 'pc-hardware', 'gaming-news', 'ai', 'memes'].map(cat => ({ cat }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = CATEGORY_META[params.cat as keyof typeof CATEGORY_META];
  if (!meta) return {};
  return {
    title: `${meta.emoji} ${meta.title} | TechAutoGame Hub`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { cat } = params;
  const meta = CATEGORY_META[cat as keyof typeof CATEGORY_META];
  if (!meta) notFound();

  let posts: Article[] = [];
  try {
    const rawPosts = getPostsByCategory(cat);
    if (rawPosts.length > 0) {
      posts = rawPosts.map(p => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, category: p.category, date: p.date, image: p.image, readTime: p.readTime, isNew: p.isNew, isHot: p.isHot }));
    }
  } catch {}

  const display = posts.length > 0 ? posts : (DEMO_BY_CATEGORY[cat] || []);

  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '600px', height: '600px',
            background: `radial-gradient(circle, ${meta.color}20 0%, transparent 70%)`,
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{meta.emoji}</div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            {meta.title}
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto' }}>
            {meta.description}
          </p>
        </section>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AdBanner slot={`${cat}-top`} />
        </div>

        <div className="articles-grid">
          {display.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div style={{ maxWidth: '1280px', margin: '1rem auto', padding: '0 1.5rem' }}>
          <AdBanner slot={`${cat}-bottom`} />
        </div>
      </main>
      <Footer />
    </>
  );
}
