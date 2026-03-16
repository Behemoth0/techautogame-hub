// =====================================================
// Affiliate система — eBay Partner Network + Admitad
// Обидві мережі доступні з України, платять на Payoneer
// =====================================================

// --- eBay Partner Network ---
// Реєстрація: https://partner.ebay.com (безкоштовно, глобально)
// Виплата: Payoneer → Monobank/Privat24
// Комісія: 1-4% від покупки
// Після реєстрації замінити EBAY_CAMPAIGN_ID на реальний
export const EBAY_CAMPAIGN_ID = process.env.NEXT_PUBLIC_EBAY_CAMPAIGN_ID || 'YOUR_CAMPAIGN_ID';
export const EBAY_CUSTOM_ID = 'techautogame'; // твій tracking ID

// --- Admitad ---
// Реєстрація: https://www.admitad.com/en/publishers/ (є AliExpress, багато UA магазинів)
// Виплата: Payoneer, WebMoney, банківський переказ
// Після реєстрації отримуєш унікальне посилання на кожен магазин

export interface AffiliateProduct {
  name: string;
  searchQuery: string; // для eBay пошуку
  priceRange?: string;
  keywords: string[];
  category: 'tech' | 'auto' | 'gaming';
  network: 'ebay' | 'admitad';
  // Пряме Admitad посилання (заповнити після реєстрації на admitad.com)
  admitadUrl?: string;
}

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  // ── TECH ──────────────────────────────────────────
  {
    name: 'AirPods Pro 2',
    searchQuery: 'Apple AirPods Pro 2nd generation',
    priceRange: '$150-200',
    keywords: ['airpods', 'earbuds', 'wireless earphones', 'apple audio'],
    category: 'tech', network: 'ebay',
  },
  {
    name: '4K Gaming Monitor',
    searchQuery: '4K gaming monitor 144Hz IPS',
    priceRange: '$300-800',
    keywords: ['monitor', 'display', '4k', 'screen', 'gaming monitor'],
    category: 'tech', network: 'ebay',
  },
  {
    name: 'Logitech MX Master 3 Mouse',
    searchQuery: 'Logitech MX Master 3 wireless mouse',
    priceRange: '$80-110',
    keywords: ['mouse', 'logitech', 'productivity', 'wireless mouse'],
    category: 'tech', network: 'ebay',
  },
  {
    name: 'USB-C 65W Fast Charger',
    searchQuery: 'USB-C 65W GaN fast charger',
    priceRange: '$20-40',
    keywords: ['charger', 'usb-c', 'fast charge', 'gan charger'],
    category: 'tech', network: 'ebay',
  },
  {
    name: 'Raspberry Pi 5',
    searchQuery: 'Raspberry Pi 5 8GB',
    priceRange: '$70-90',
    keywords: ['raspberry pi', 'single board computer', 'linux', 'diy'],
    category: 'tech', network: 'ebay',
  },
  {
    name: 'Mechanical Keyboard RGB',
    searchQuery: 'mechanical keyboard RGB gaming',
    priceRange: '$60-150',
    keywords: ['keyboard', 'mechanical keyboard', 'rgb keyboard', 'gaming keyboard'],
    category: 'tech', network: 'ebay',
  },

  // ── AUTO ──────────────────────────────────────────
  {
    name: 'OBD2 Bluetooth Car Scanner',
    searchQuery: 'OBD2 Bluetooth car diagnostic scanner',
    priceRange: '$20-60',
    keywords: ['obd2', 'scanner', 'car diagnostic', 'check engine', 'diagnostic'],
    category: 'auto', network: 'ebay',
  },
  {
    name: '4K Dashcam Front & Rear',
    searchQuery: '4K dashcam front rear camera',
    priceRange: '$50-150',
    keywords: ['dashcam', 'dash cam', 'car camera', 'recording', '4k camera'],
    category: 'auto', network: 'ebay',
  },
  {
    name: 'Wireless CarPlay Adapter',
    searchQuery: 'wireless Apple CarPlay Android Auto adapter',
    priceRange: '$50-90',
    keywords: ['carplay', 'apple carplay', 'android auto', 'wireless'],
    category: 'auto', network: 'ebay',
  },
  {
    name: 'Portable Jump Starter',
    searchQuery: 'portable jump starter battery booster 2000A',
    priceRange: '$60-120',
    keywords: ['jump starter', 'battery booster', 'noco', 'jump pack'],
    category: 'auto', network: 'ebay',
  },
  {
    name: 'Car Detailing Kit',
    searchQuery: 'car detailing kit wax polish cleaning set',
    priceRange: '$30-80',
    keywords: ['detailing', 'car wash', 'wax', 'polish', 'car cleaning'],
    category: 'auto', network: 'ebay',
  },
  {
    name: 'Digital Tyre Inflator 12V',
    searchQuery: 'digital tire inflator 12V portable air compressor',
    priceRange: '$25-60',
    keywords: ['tyre inflator', 'tire pump', 'air compressor', 'inflator'],
    category: 'auto', network: 'ebay',
  },

  // ── GAMING ────────────────────────────────────────
  {
    name: 'PS5 DualSense Controller',
    searchQuery: 'PlayStation 5 DualSense controller',
    priceRange: '$60-80',
    keywords: ['ps5', 'playstation', 'dualsense', 'controller', 'gamepad'],
    category: 'gaming', network: 'ebay',
  },
  {
    name: 'Gaming Headset 7.1 Surround',
    searchQuery: 'gaming headset 7.1 surround sound RGB',
    priceRange: '$50-250',
    keywords: ['headset', 'gaming headset', 'surround sound', '7.1'],
    category: 'gaming', network: 'ebay',
  },
  {
    name: 'Gaming Mouse 25000 DPI',
    searchQuery: 'gaming mouse high DPI RGB wireless',
    priceRange: '$40-150',
    keywords: ['gaming mouse', 'fps mouse', 'gaming mice', 'high dpi'],
    category: 'gaming', network: 'ebay',
  },
  {
    name: 'RTX 4070 Gaming Laptop',
    searchQuery: 'gaming laptop RTX 4070 16GB',
    priceRange: '$1100-1600',
    keywords: ['gaming laptop', 'rtx 4070', 'rtx 4080', 'gaming notebook'],
    category: 'gaming', network: 'ebay',
  },
  {
    name: 'Nintendo Switch OLED',
    searchQuery: 'Nintendo Switch OLED console',
    priceRange: '$300-380',
    keywords: ['nintendo', 'switch oled', 'portable gaming', 'nintendo switch'],
    category: 'gaming', network: 'ebay',
  },
  {
    name: 'Gaming Chair Ergonomic',
    searchQuery: 'gaming chair ergonomic racing style',
    priceRange: '$150-400',
    keywords: ['gaming chair', 'ergonomic chair', 'racing chair', 'office gaming'],
    category: 'gaming', network: 'ebay',
  },
];

// Будує eBay affiliate посилання (пошук за запитом)
export function buildEbayUrl(searchQuery: string): string {
  const encoded = encodeURIComponent(searchQuery);
  // Якщо CAMPAIGN_ID ще не вставлений — відкриється звичайний eBay пошук
  if (EBAY_CAMPAIGN_ID === 'YOUR_CAMPAIGN_ID') {
    return `https://www.ebay.com/sch/i.html?_nkw=${encoded}`;
  }
  return `https://www.ebay.com/sch/i.html?_nkw=${encoded}&campid=${EBAY_CAMPAIGN_ID}&toolid=10001&mkevt=1&mkcid=1&customid=${EBAY_CUSTOM_ID}`;
}

// Будує AliExpress Admitad посилання
export function buildAliUrl(searchQuery: string, admitadUrl?: string): string {
  if (admitadUrl) return admitadUrl;
  // Фолбек — звичайний AliExpress пошук
  return `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(searchQuery)}`;
}

// Знайти релевантні продукти для тексту статті
export function findRelevantProducts(content: string, category: string, limit = 3): AffiliateProduct[] {
  const lower = content.toLowerCase();
  const catProducts = AFFILIATE_PRODUCTS.filter(
    p => p.category === category || category === 'all'
  );

  const scored = catProducts.map(product => {
    let score = 0;
    for (const kw of product.keywords) {
      if (lower.includes(kw.toLowerCase())) score += 2;
    }
    return { product, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const result = scored.filter(s => s.score > 0).slice(0, limit).map(s => s.product);
  return result.length > 0 ? result : catProducts.slice(0, limit);
}

// Головна функція для отримання URL продукту
export function getProductUrl(product: AffiliateProduct): string {
  if (product.network === 'admitad' && product.admitadUrl) {
    return product.admitadUrl;
  }
  return buildEbayUrl(product.searchQuery);
}
