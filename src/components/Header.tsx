'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NAV = [
  { href: '/category/tech', labelEn: '🔧 Tech', labelUk: '🔧 Технології' },
  { href: '/category/auto', labelEn: '🚗 Auto', labelUk: '🚗 Авто' },
  { href: '/category/gaming', labelEn: '🎮 Gaming', labelUk: '🎮 Ігри' },
  { href: '/category/auto-safety', labelEn: '🛡️ Auto Safety', labelUk: '🛡️ Авто Безпека' },
  { href: '/category/auto-news', labelEn: '🚘 Auto News', labelUk: '🚘 Авто Новини' },
  { href: '/category/pc-hardware', labelEn: '💻 PC Hardware', labelUk: '💻 ПК Залізо' },
  { href: '/category/gaming-news', labelEn: '🕹️ Gaming News', labelUk: '🕹️ Ігрові Новини' },
  { href: '/category/ai', labelEn: '🧠 AI', labelUk: '🧠 ШІ' },
  { href: '/category/memes', labelEn: '😂 Memes', labelUk: '😂 Меми' },
];

export default function Header() {
  const router = useRouter();
  const [lang, setLang] = useState<'en'|'uk'>('en');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = document.cookie.split('; ').find(row => row.startsWith('lang='))?.split('=')[1];
    if (saved === 'uk') setLang('uk');
  }, []);

  const handleLangChange = (newLang: 'en'|'uk') => {
    setLang(newLang);
    document.cookie = `lang=${newLang}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="logo">⚡ TechAutoGame</Link>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {NAV.map(n => <Link key={n.href} href={n.href}>{lang === 'uk' ? n.labelUk : n.labelEn}</Link>)}
        </nav>

        <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
          <div className="lang-switcher">
            <button className={`lang-btn ${lang==='en'?'active':''}`} onClick={()=>handleLangChange('en')}>EN</button>
            <button className={`lang-btn ${lang==='uk'?'active':''}`} onClick={()=>handleLangChange('uk')}>UK</button>
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
              {lang === 'uk' ? n.labelUk : n.labelEn}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
