import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AffiliateBox from '@/components/AffiliateBox';
import AdBanner from '@/components/AdBanner';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | TechAutoGame Hub`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h|u|l])/gm, '')
    .trim();
}

// Демо статті для відображення якщо немає реальних
const DEMO_POST = {
  slug: 'demo',
  title: 'Best Gaming Laptops 2025: RTX 4070 vs 4080 — Which One to Buy?',
  excerpt: 'We tested 12 gaming laptops to find the best value for every budget.',
  category: 'gaming' as const,
  date: '2025-03-12',
  image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80',
  readTime: 8,
  isHot: true,
  content: `## Introduction

Gaming laptops have never been better. With NVIDIA's RTX 40-series GPUs finally reaching laptops at reasonable prices, 2025 is the year to upgrade.

We tested 12 different laptops over 3 months, playing games at various settings, running benchmarks, and checking thermal performance.

## Our Top Picks

After extensive testing, here are our recommendations:

**Best Overall: ASUS ROG Strix G16 (RTX 4070)**
- Price: $1,299
- Display: 165Hz QHD IPS
- Performance: Excellent for 1440p gaming

**Best Premium: Razer Blade 16 (RTX 4080)**
- Price: $2,799
- Display: 240Hz QHD OLED
- Performance: The fastest gaming laptop tested

**Best Budget: Lenovo LOQ 15 (RTX 4060)**
- Price: $849
- Display: 144Hz FHD IPS
- Performance: Great for 1080p gaming

## RTX 4070 vs 4080: The Verdict

Unless you play at 4K or need the absolute best, the RTX 4070 is the sweet spot. It delivers 90% of the 4080's performance at 60% of the price.

## Our Recommendation

For most gamers, the RTX 4070 tier ($1,200-1,500) is the best value. Only go 4080 if you have the budget and need the best.`,
};

export default async function ArticlePage({ params }: Props) {
  let post = getPostBySlug(params.slug);
  
  // Якщо стаття не знайдена в файловій системі — показуємо демо
  if (!post) {
    if (params.slug === 'demo' || params.slug === 'best-gaming-laptops-2025' || params.slug === 'apple-m4-macbook-pro-review' || params.slug === 'tesla-model-3-highland-review' || params.slug === 'ps5-pro-vs-xbox-series-x' || params.slug === 'best-budget-dashcams-2025' || params.slug === 'best-mechanical-keyboards-2025') {
      post = { ...DEMO_POST, slug: params.slug };
    } else {
      notFound();
    }
  }

  const htmlContent = `<p>${markdownToHtml(post.content)}</p>`;
  const catLabel = post.category === 'tech' ? '🔧 Technology' : post.category === 'auto' ? '🚗 Auto' : '🎮 Gaming';

  return (
    <>
      <Header />
      <main>
        <article className="article-page">
          {/* BREADCRUMB */}
          <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <a href="/" style={{ color: 'var(--text-muted)' }}>Home</a>
            {' → '}
            <a href={`/category/${post.category}`} style={{ color: 'var(--text-muted)' }}>{catLabel}</a>
            {' → '}
            <span style={{ color: 'var(--text-secondary)' }}>{post.title.slice(0, 40)}...</span>
          </div>

          {/* META */}
          <div className="article-meta">
            <span className={`card-category cat-${post.category}`}>{catLabel}</span>
            {post.isHot && <span className="badge badge-hot">🔥 Hot</span>}
            {post.isNew && <span className="badge badge-new">New</span>}
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              ⏱ {post.readTime || 5} min read
            </span>
          </div>

          {/* TITLE */}
          <h1 className="article-title">{post.title}</h1>
          
          {/* EXCERPT */}
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', fontStyle: 'italic', borderLeft: '3px solid #6366f1', paddingLeft: '1rem' }}>
            {post.excerpt}
          </p>

          {/* HERO IMAGE */}
          {post.image && (
            <img src={post.image} alt={post.title} className="article-hero-img" />
          )}

          {/* AD TOP */}
          <AdBanner slot="article-top" />

          {/* AFFILIATE BOX TOP */}
          <AffiliateBox content={post.content} category={post.category} />

          {/* CONTENT */}
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* AD MIDDLE */}
          <AdBanner slot="article-mid" />

          {/* AFFILIATE BOX BOTTOM */}
          <AffiliateBox 
            content={post.content} 
            category={post.category}
            title="🛍️ Products Mentioned in This Article"
          />

          {/* TAGS */}
          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Tags: </span>
              {post.tags.map(tag => (
                <span key={tag} style={{
                  display: 'inline-block',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '50px',
                  padding: '0.2rem 0.75rem',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginLeft: '0.4rem',
                  marginBottom: '0.4rem',
                }}>{tag}</span>
              ))}
            </div>
          )}

          {/* AD BOTTOM */}
          <AdBanner slot="article-bottom" />

          {/* DISCLAIMER */}
          <div style={{
            background: 'rgba(99,102,241,0.05)',
            border: '1px solid rgba(99,102,241,0.1)',
            borderRadius: '12px',
            padding: '1rem',
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}>
            <strong style={{ color: 'var(--text-secondary)' }}>Affiliate Disclosure:</strong> TechAutoGame Hub participates in the Amazon Associates program. We may earn commissions from qualifying purchases at no extra cost to you.
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
