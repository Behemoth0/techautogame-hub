import { findRelevantProducts, getProductUrl, AffiliateProduct } from '@/lib/affiliates';

interface AffiliateBoxProps {
  content: string;
  category: string;
  title?: string;
}

export default function AffiliateBox({ content, category, title = '🛒 Best Deals — Find on eBay' }: AffiliateBoxProps) {
  const products = findRelevantProducts(content, category, 3);
  if (products.length === 0) return null;

  return (
    <div className="affiliate-box">
      <h3>{title}</h3>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
        We may earn a small commission if you buy through these links — at no extra cost to you.
      </p>
      {products.map((product) => (
        <a
          key={product.searchQuery}
          href={getProductUrl(product)}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="affiliate-item"
        >
          <div className="affiliate-item-info">
            <div className="affiliate-item-name">{product.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              {product.network === 'ebay' ? '🛍️ View on eBay' : '🛒 View on AliExpress'}
              {product.priceRange && <span style={{ color: '#fbbf24', fontWeight: 700, marginLeft: '8px' }}>{product.priceRange}</span>}
            </div>
          </div>
          <span className="btn-buy">
            {product.network === 'ebay' ? 'eBay →' : 'Buy →'}
          </span>
        </a>
      ))}
      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
        * Prices are approximate. Click to see current deals.
      </p>
    </div>
  );
}
