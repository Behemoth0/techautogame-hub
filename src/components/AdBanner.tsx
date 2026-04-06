'use client';

import { useEffect, useRef } from 'react';

interface AdBannerProps {
  slot?: string;
}

export default function AdBanner({ slot = 'default' }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Не завантажувати двічі той самий скрипт для цього слоту
    const scriptId = `monetag-zone-${slot}`;
    if (document.getElementById(scriptId)) return;

    const s = document.createElement('script');
    s.id = scriptId;
    s.dataset.zone = '10839534';
    s.src = 'https://nap5k.com/tag.min.js';
    s.async = true;
    containerRef.current.appendChild(s);
  }, [slot]);

  return (
    <div className="ad-container" style={{ margin: '1.5rem 0', minHeight: '60px', textAlign: 'center' }}>
      <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Advertisement
      </p>
      <div ref={containerRef} style={{ minHeight: '50px' }} />
    </div>
  );
}

