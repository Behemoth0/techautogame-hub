'use client';
import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { href: '/category/tech', label: '🔧 Tech' },
  { href: '/category/auto', label: '🚗 Auto' },
  { href: '/category/gaming', label: '🎮 Gaming' },
  { href: '/category/auto-safety', label: '🛡️ Auto Safety' },
  { href: '/category/auto-news', label: '🚘 Auto News' },
  { href: '/category/pc-hardware', label: '💻 PC Hardware' },
  { href: '/category/gaming-news', label: '🕹️ Gaming News' },
  { href: '/category/ai', label: '🧠 AI' },
  { href: '/category/memes', label: '😂 Memes' },
];

export default function Header() {
  const [lang, setLang] = useState<'en'|'uk'>('en');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">⚡ TechAutoGame</Link>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {NAV.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}
        </nav>

        <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
          <div className="lang-switcher">
            <button className={`lang-btn ${lang==='en'?'active':''}`} onClick={()=>setLang('en')}>EN</button>
            <button className={`lang-btn ${lang==='uk'?'active':''}`} onClick={()=>setLang('uk')}>UK</button>
          </div>
          {/* Mobile burger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ background:'none', border:'1px solid var(--border)', padding:'6px 10px', borderRadius:'8px', color:'var(--text-secondary)', cursor:'pointer', display:'none' }}
          >☰</button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav style={{ padding:'1rem 1.5rem', borderTop:'1px solid var(--border)', display:'flex', flexWrap:'wrap', gap:'0.75rem' }}>
          {NAV.map(n => (
            <Link key={n.href} href={n.href} style={{ color:'var(--text-secondary)', textDecoration:'none', fontSize:'0.95rem' }} onClick={()=>setMenuOpen(false)}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
