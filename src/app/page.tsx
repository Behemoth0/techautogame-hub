import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ArticleCard, { Article } from '@/components/ArticleCard';
import AdBanner from '@/components/AdBanner';
import { getLatestPosts } from '@/lib/posts';
import Link from 'next/link';

// Демонстраційні статті якщо немає згенерованих
const DEMO_ARTICLES: Article[] = [
  {
    slug: 'best-gaming-laptops-2025',
    title: 'Best Gaming Laptops 2025: RTX 4070 vs 4080 — Which One to Buy?',
    excerpt: 'We tested 12 gaming laptops to find the best value. Here are our top picks for every budget, from $800 to $3000.',
    category: 'gaming',
    date: '2025-03-12',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    readTime: 8,
    isHot: true,
  },
  {
    slug: 'tesla-model-3-highland-review',
    title: 'Tesla Model 3 Highland Review: Is the Refresh Worth It?',
    excerpt: 'The refreshed Tesla Model 3 "Highland" brings a new interior, improved range, and updated tech. We drove it for a week.',
    category: 'auto',
    date: '2025-03-11',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
    readTime: 6,
    isNew: true,
  },
  {
    slug: 'apple-m4-macbook-pro-review',
    title: 'Apple M4 MacBook Pro Review: The Chip That Changes Everything',
    excerpt: 'Apple\'s M4 chip delivers extraordinary performance. But is the MacBook Pro worth $1999 in 2025? Our full deep-dive.',
    category: 'tech',
    date: '2025-03-10',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    readTime: 10,
  },
  {
    slug: 'ps5-pro-vs-xbox-series-x',
    title: 'PS5 Pro vs Xbox Series X: Who Wins in 2025?',
    excerpt: 'Sony\'s PS5 Pro finally launched. We compare raw power, exclusives, and value against Microsoft\'s Xbox Series X.',
    category: 'gaming',
    date: '2025-03-09',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80',
    readTime: 7,
    isHot: true,
  },
  {
    slug: 'best-budget-dashcams-2025',
    title: 'Best Budget Dashcams Under $100 in 2025',
    excerpt: 'Protect yourself on the road without breaking the bank. These 5 dashcams offer great video quality under $100.',
    category: 'auto',
    date: '2025-03-08',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
    readTime: 5,
  },
  {
    slug: 'best-mechanical-keyboards-2025',
    title: 'Best Mechanical Keyboards 2025: For Gaming & Productivity',
    excerpt: 'From RGB gaming boards to silent office switches — we tested 20 mechanical keyboards to find the best ones.',
    category: 'tech',
    date: '2025-03-07',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    readTime: 9,
  },
];

export default async function HomePage() {
  let posts: Article[] = [];
  
  try {
    const rawPosts = getLatestPosts(6);
    if (rawPosts.length > 0) {
      posts = rawPosts.map(p => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
        date: p.date,
        image: p.image,
        readTime: p.readTime,
        isNew: p.isNew,
        isHot: p.isHot,
      }));
    }
  } catch {}

  const displayArticles = posts.length > 0 ? posts : DEMO_ARTICLES;
  const featured = displayArticles[0];
  const rest = displayArticles.slice(1);

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-tag">⚡ Updated Daily by AI</div>
          <h1>
            <span className="gradient-text">Tech. Auto. Gaming.</span>
            <br />Reviews You Can Trust
          </h1>
          <p>Discover the best gadgets, cars, and gaming gear. Expert reviews, honest comparisons, and unbeatable deals — updated every day.</p>
          <div className="category-pills">
            <Link href="/category/tech" className="pill pill-tech">🔧 Technology</Link>
            <Link href="/category/auto" className="pill pill-auto">🚗 Automotive</Link>
            <Link href="/category/gaming" className="pill pill-gaming">🎮 Gaming</Link>
            <Link href="/category/auto-safety" className="pill pill-auto-safety">🛡️ Auto Safety</Link>
            <Link href="/category/auto-news" className="pill pill-auto-news">🚘 Auto News</Link>
            <Link href="/category/pc-hardware" className="pill pill-pc-hardware">💻 PC Hardware</Link>
            <Link href="/category/gaming-news" className="pill pill-gaming-news">🕹️ Gaming News</Link>
            <Link href="/category/ai" className="pill pill-ai">🧠 AI & ML</Link>
            <Link href="/category/memes" className="pill pill-memes">😂 Memes</Link>
          </div>
        </section>

        {/* AD BANNER TOP */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <AdBanner slot="top-banner" />
        </div>

        {/* FEATURED ARTICLE */}
        {featured && (
          <section style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 1.5rem' }}>
            <Link href={`/blog/${featured.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                minHeight: '350px',
                transition: 'all 0.3s',
              }}
                className="article-card"
              >
                {featured.image && (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span className={`card-category cat-${featured.category}`}>
                      {featured.category === 'tech' ? '🔧 Technology' : featured.category === 'auto' ? '🚗 Auto' : '🎮 Gaming'}
                    </span>
                    <span className="badge badge-hot">Featured</span>
                  </div>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    {featured.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{featured.excerpt}</p>
                  <span className="read-more" style={{ fontSize: '1rem' }}>
                    Read Full Review →
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* LATEST ARTICLES */}
        <div className="section-header">
          <h2 className="section-title">Latest Reviews</h2>
          <Link href="/blog" className="section-link">View all →</Link>
        </div>
        <div className="articles-grid">
          {rest.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {/* AD BANNER MIDDLE */}
        <div style={{ maxWidth: '1280px', margin: '1rem auto', padding: '0 1.5rem' }}>
          <AdBanner slot="mid-banner" />
        </div>

        {/* STATS BAR */}
        <section style={{ maxWidth: '1280px', margin: '3rem auto', padding: '0 1.5rem' }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            textAlign: 'center',
          }}>
            {[
              { icon: '📝', value: '1000+', label: 'Articles' },
              { icon: '🚗', value: '200+', label: 'Auto & Safety' },
              { icon: '🎮', value: '250+', label: 'Gaming Reviews' },
              { icon: '🧠', value: '150+', label: 'AI News' },
              { icon: '💻', value: '200+', label: 'PC Hardware' },
              { icon: '😂', value: '100+', label: 'Memes' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem' }}>{stat.icon}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
