// PropellerAds / Media.net компонент (альтернатива Google AdSense)
// Google AdSense недоступний в Україні через обмеження (war-related restrictions)
// Використовуємо PropellerAds як основну рекламну мережу

'use client';
import { useEffect } from 'react';

interface AdBannerProps {
  slot?: string;
  type?: 'banner' | 'native' | 'interstitial';
}

export default function AdBanner({ slot = 'default', type = 'banner' }: AdBannerProps) {
  useEffect(() => {
    // PropellerAds initialization
    // Після реєстрації на propellerads.com - вставити реальний Zone ID
    // Реєстрація: propellerads.com (безкоштовно, мінімум $5 виплата)
  }, []);

  return (
    <div className="ad-container">
      <div style={{ width: '100%' }}>
        <div className="ad-label">Advertisement</div>
        {/* PropellerAds Zone — замінити ZONE_ID після реєстрації */}
        <div id={`propeller-${slot}`} style={{ minHeight: '90px', marginTop: '0.5rem' }}>
          {/* 
            Після реєстрації на PropellerAds:
            1. Йди на propellerads.com
            2. Створи новий Zone типу "Banner" або "Native"  
            3. Встав скрипт сюди замість цього коментаря
          */}
          <div style={{ 
            background: 'rgba(99,102,241,0.05)', 
            border: '1px dashed rgba(99,102,241,0.2)',
            borderRadius: '8px',
            padding: '1.5rem',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.8rem'
          }}>
            📣 Ad Space — {slot}
          </div>
        </div>
      </div>
    </div>
  );
}
