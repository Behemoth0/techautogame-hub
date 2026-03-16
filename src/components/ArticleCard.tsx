import Link from 'next/link';

export type CategorySlug = 'tech' | 'auto' | 'gaming' | 'auto-safety' | 'auto-news' | 'pc-hardware' | 'gaming-news' | 'ai' | 'memes';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  date: string;
  image?: string;
  readTime?: number;
  isNew?: boolean;
  isHot?: boolean;
}

export const CATEGORY_LABELS: Record<CategorySlug, string> = {
  tech:          '🔧 Technology',
  auto:          '🚗 Auto',
  gaming:        '🎮 Gaming',
  'auto-safety': '🛡️ Auto Safety',
  'auto-news':   '🚘 Auto News',
  'pc-hardware': '💻 PC Hardware',
  'gaming-news': '🕹️ Gaming News',
  'ai':          '🧠 AI & ML',
  'memes':       '😂 Memes',
};

export const CATEGORY_CSS: Record<CategorySlug, string> = {
  tech:          'cat-tech',
  auto:          'cat-auto',
  gaming:        'cat-gaming',
  'auto-safety': 'cat-auto-safety',
  'auto-news':   'cat-auto-news',
  'pc-hardware': 'cat-pc-hardware',
  'gaming-news': 'cat-gaming-news',
  'ai':          'cat-ai',
  'memes':       'cat-memes',
};

export default function ArticleCard({ article }: { article: Article }) {
  const label = CATEGORY_LABELS[article.category] || article.category;
  const cssClass = CATEGORY_CSS[article.category] || 'cat-tech';

  return (
    <Link href={`/blog/${article.slug}`} className="article-card">
      {article.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.image}
          alt={article.title}
          className="card-image"
          loading="lazy"
        />
      )}
      {!article.image && (
        <div className="card-image" style={{ background: 'linear-gradient(135deg, #1c2230, #0a0b0f)' }} />
      )}
      <div className="card-body">
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span className={`card-category ${cssClass}`}>
            {label}
          </span>
          {article.isNew && <span className="badge badge-new">New</span>}
          {article.isHot && <span className="badge badge-hot">🔥 Hot</span>}
        </div>
        <h2 className="card-title">{article.title}</h2>
        <p className="card-excerpt">{article.excerpt}</p>
        <div className="card-footer">
          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          <span className="read-more">{article.readTime || 5} min read →</span>
        </div>
      </div>
    </Link>
  );
}
