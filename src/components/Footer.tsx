import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo" style={{ fontSize: '1.3rem' }}>⚡ TechAutoGame Hub</span>
          <p>Your daily source for tech gadgets, car reviews, and gaming gear. AI-powered content updated every day.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            🛒 We use affiliate links. <Link href="/affiliate-disclosure" style={{ color: '#818cf8' }}>Disclosure</Link>
          </p>
        </div>
        <div className="footer-links">
          <h4>Categories</h4>
          <Link href="/category/tech">🔧 Technology</Link>
          <Link href="/category/auto">🚗 Automotive</Link>
          <Link href="/category/gaming">🎮 Gaming</Link>
        </div>
        <div className="footer-links">
          <h4>Info</h4>
          <Link href="/about">About Us</Link>
          <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/sitemap.xml">Sitemap</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} TechAutoGame Hub. All rights reserved.</span>
        <span>Built with ❤️ + AI</span>
      </div>
    </footer>
  );
}
