import { Store, Restaurant, Offer, MallEvent } from '../types';

export const MALL_INFO = {
  name: 'STATUS MALL',
  tagline: 'Where Shopping Meets Lifestyle',
  temperature: '28°C',
  weatherCondition: 'Sunny & Pleasant',
  stats: {
    storesCount: '120+',
    foodOutletsCount: '25+',
    multiplexScreens: '8',
    experienceRating: '1 Great Experience'
  },
  hours: {
    weekdays: '10:00 AM – 11:00 PM',
    weekends: '10:00 AM – 12:00 AM',
    multiplex: '10:00 AM – 02:00 AM'
  },
  contact: {
    phone: '+1 (800) 782-8876',
    email: 'concierge@statusmall.com',
    address: '8800 Grand Boulevard, Metro Central District'
  }
};

export const TOP_BRANDS = [
  { name: 'Nike', category: 'Sports & Athleisure' },
  { name: 'Adidas', category: 'Sportswear' },
  { name: 'ZARA', category: 'High Fashion' },
  { name: 'H&M', category: 'Modern Style' },
  { name: 'Apple', category: 'Flagship Tech' },
  { name: 'Max', category: 'Trendy Apparel' },
  { name: 'Puma', category: 'Athletic Gear' },
  { name: 'Levi’s', category: 'Denim Heritage' },
  { name: 'Lifestyle', category: 'Curated Department' },
  { name: '+ More', category: 'Over 120 Retailers' }
];

export const STORES_DATA: Store[] = [
  {
    id: 'zara',
    name: 'ZARA',
    category: 'Fashion',
    floor: 'Level 1',
    zone: 'Fashion Boulevard • Unit 104',
    logoText: 'ZARA',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
    description: 'Spanish fast-fashion powerhouse with seasonal couture, tailored contemporary suits, and avant-garde streetwear collections.',
    tags: ['Women', 'Men', 'Kids', 'New Arrivals'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-2831',
    isFeatured: true
  },
  {
    id: 'apple',
    name: 'Apple',
    category: 'Electronics',
    floor: 'Ground Level',
    zone: 'Innovation Court • Unit G02',
    logoText: 'Apple',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    description: 'Flagship architectural glass pavilion featuring the full lineup of iPhone, Mac, Apple Watch, and Genius Bar expert reservations.',
    tags: ['Smartphones', 'Laptops', 'Audio', 'Genius Bar'],
    hours: '10:00 AM - 10:30 PM',
    phone: '+1 (555) 019-4820',
    isFeatured: true
  },
  {
    id: 'nike',
    name: 'Nike Rise',
    category: 'Sports',
    floor: 'Level 2',
    zone: 'Athletics Corridor • Unit 208',
    logoText: 'NIKE',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop',
    description: 'Next-generation digital retail concept featuring gait analysis lab, customization workshop, and limited edition sneaker drops.',
    tags: ['Running', 'Basketball', 'Apparel', 'Custom Studio'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-9943',
    isFeatured: true
  },
  {
    id: 'gucci',
    name: 'Gucci',
    category: 'Luxury',
    floor: 'Ground Level',
    zone: 'The Grand Rotunda • Unit G12',
    logoText: 'GUCCI',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop',
    description: 'Iconic Italian luxury house showcasing ready-to-wear, artisanal leather handbags, fine jewellery, and VIP styling salons.',
    tags: ['Haute Couture', 'Leather Goods', 'Watches', 'Private Salon'],
    hours: '10:30 AM - 10:00 PM',
    phone: '+1 (555) 019-7711',
    isFeatured: true
  },
  {
    id: 'sephora',
    name: 'Sephora',
    category: 'Beauty',
    floor: 'Level 1',
    zone: 'Beauty Atrium • Unit 118',
    logoText: 'SEPHORA',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop',
    description: 'Premier beauty destination carrying luxury skincare, niche fragrances, clean cosmetics, and complimentary beauty masterclasses.',
    tags: ['Skincare', 'Fragrance', 'Makeup', 'Makeover Studio'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-3352'
  },
  {
    id: 'adidas',
    name: 'Adidas Originals',
    category: 'Sports',
    floor: 'Level 2',
    zone: 'Athletics Corridor • Unit 214',
    logoText: 'ADIDAS',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1000&auto=format&fit=crop',
    description: 'Celebrating street culture, archival silhouettes, high-performance running innovations, and exclusive designer collaborations.',
    tags: ['Sneakers', 'Streetwear', 'Training', 'Originals'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-8824'
  },
  {
    id: 'hm',
    name: 'H&M Home & Apparel',
    category: 'Fashion',
    floor: 'Level 1',
    zone: 'Central Promenade • Unit 120',
    logoText: 'H&M',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop',
    description: 'Sprawling duplex store offering conscious fashion staples, seasonal trending drops, and curated Scandinavian home decor.',
    tags: ['Women', 'Men', 'Home Decor', 'Conscious'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-5519'
  },
  {
    id: 'dyson',
    name: 'Dyson Demo Store',
    category: 'Electronics',
    floor: 'Level 1',
    zone: 'Innovation Court • Unit 109',
    logoText: 'DYSON',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    description: 'Interactive styling bar and tech showcase for hair care innovations, cordless vacuums, and air purifying technologies.',
    tags: ['Hair Care', 'Air Purification', 'Smart Tech'],
    hours: '10:00 AM - 10:00 PM',
    phone: '+1 (555) 019-6120'
  },
  {
    id: 'rolex',
    name: 'Rolex Boutique',
    category: 'Luxury',
    floor: 'Ground Level',
    zone: 'The Grand Rotunda • Unit G06',
    logoText: 'ROLEX',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop',
    description: 'Official Rolex retailer with private horological suites, Swiss watchmakers on-site, and timeless Oyster Perpetual timepieces.',
    tags: ['Swiss Watches', 'Horology', 'Luxury', 'Private Viewing'],
    hours: '11:00 AM - 09:30 PM',
    phone: '+1 (555) 019-9002',
    isFeatured: true
  },
  {
    id: 'muji',
    name: 'MUJI',
    category: 'Lifestyle',
    floor: 'Level 2',
    zone: 'Zen Walkway • Unit 230',
    logoText: 'MUJI',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000&auto=format&fit=crop',
    description: 'Minimalist Japanese lifestyle goods spanning organic cotton wear, modular storage solutions, aroma diffusers, and stationery.',
    tags: ['Minimalist', 'Home Goods', 'Travel', 'Stationery'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-4412'
  },
  {
    id: 'levis',
    name: "Levi's Tailor Shop",
    category: 'Fashion',
    floor: 'Level 2',
    zone: 'Denim Row • Unit 218',
    logoText: "LEVI'S",
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000&auto=format&fit=crop',
    description: 'Original American denim with custom chain-stitching, distressing, patches, and bespoke fit consultations in-store.',
    tags: ['Denim', 'Tailor Shop', 'Jackets', 'Custom Fit'],
    hours: '10:00 AM - 11:00 PM',
    phone: '+1 (555) 019-5881'
  },
  {
    id: 'aesop',
    name: 'Aēsop',
    category: 'Beauty',
    floor: 'Ground Level',
    zone: 'Wellness Avenue • Unit G18',
    logoText: 'AESOP',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop',
    description: 'Sculptural brass and travertine boutique providing plant-based skin, hair, and aromatic formulations of the highest caliber.',
    tags: ['Aromatics', 'Skincare', 'Sustainable', 'Fragrance'],
    hours: '10:00 AM - 10:00 PM',
    phone: '+1 (555) 019-2119'
  }
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'lumina-sky',
    name: 'Lumina Sky Lounge & Grill',
    cuisine: 'Modern European & Prime Steaks',
    category: 'Fine Dining',
    floor: 'Rooftop Level 4',
    rating: 4.9,
    reviewCount: 384,
    priceRange: '$$$$',
    status: 'Open until 12 AM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    signatureDish: 'A5 Miyazaki Wagyu & Truffle Emulsion',
    description: 'Breathtaking 360-degree city skyline panoramic views, dry-aged steaks, sommelier wine pairings, and ambient harp performances.'
  },
  {
    id: 'sakura-omakase',
    name: 'Sakura Japanese Omakase',
    cuisine: 'Authentic Tokyo Sushi',
    category: 'Fine Dining',
    floor: 'Level 3 • Dining Terrace',
    rating: 4.9,
    reviewCount: 260,
    priceRange: '$$$$',
    status: 'Closes at 11 PM',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000&auto=format&fit=crop',
    signatureDish: '18-Course Wild Bluefin Omakase',
    description: 'Intimate 14-seat Hinoki counter overseen by Master Chef Kenji with daily fish flown in fresh from Toyosu Market.'
  },
  {
    id: 'artisan-cafe',
    name: 'The Glasshouse Artisan Café',
    cuisine: 'Specialty Coffee & Viennoiserie',
    category: 'Cafés',
    floor: 'Ground Level • Palm Garden',
    rating: 4.8,
    reviewCount: 612,
    priceRange: '$$',
    status: 'Open Now',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
    signatureDish: 'Cardamom Saffron Cruffin & Cold Brew',
    description: 'Sun-drenched botanical greenhouse serving single-origin Ethiopian pourovers, freshly laminated pastries, and brunch plates.'
  },
  {
    id: 'la-trattoria',
    name: 'Trattoria Milano',
    cuisine: 'Rustic Italian & Handmade Pasta',
    category: 'Family Dining',
    floor: 'Level 3 • Piazza Terraces',
    rating: 4.7,
    reviewCount: 520,
    priceRange: '$$$',
    status: 'Open until 12 AM',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    signatureDish: 'Wood-fired Burrata Pizza & Tagliolini al Tartufo',
    description: 'Warm family atmosphere centering a 900-degree Stefano Ferrara pizza oven and fresh pasta extruded live in open kitchens.'
  },
  {
    id: 'tokyo-bao',
    name: 'Bao & Broth Craft Ramen',
    cuisine: 'Hand-pulled Noodles & Dim Sum',
    category: 'Fast Casual',
    floor: 'Level 2 • Urban Food Hall',
    rating: 4.8,
    reviewCount: 740,
    priceRange: '$$',
    status: 'Open Now',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1000&auto=format&fit=crop',
    signatureDish: '24-Hour Rich Black Garlic Tonkotsu',
    description: 'Fast, vibrant counter serving steaming bowls of artisanal broth, crispy chili oil wontons, and fluffy Berkshire pork bao.'
  },
  {
    id: 'glace-patisserie',
    name: 'Le Glacé French Pâtisserie',
    cuisine: 'Artisanal Gelato & Macarons',
    category: 'Desserts',
    floor: 'Level 1 • Central Promenade',
    rating: 4.9,
    reviewCount: 418,
    priceRange: '$$',
    status: 'Open Now',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    signatureDish: 'Pistachio Raspberry Mirror Glaze Cake',
    description: 'Handcrafted confectionary jewel box with edible gold leaf desserts, French macarons, and Madagascan vanilla soft serve.'
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'weekend-fashion',
    title: 'Weekend Fashion Sale',
    subtitle: 'Elevate Your Wardrobe',
    description: 'Enjoy up to 40% off across premier fashion flagships and luxury boutique lines for this weekend only.',
    store: 'ZARA, Nike, Gucci & H&M',
    category: 'Fashion & Luxury',
    validUntil: 'Valid this Saturday & Sunday',
    discount: 'UP TO 40% OFF',
    code: 'STATUSWEEKEND',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'dining-festival',
    title: 'Dining Festival',
    subtitle: 'Culinary Masterpieces',
    description: 'Complimentary chef tasting flight with every reservation at participating fine dining terraces and rooftop lounges.',
    store: 'Rooftop Terraces & Lumina Sky',
    category: 'Gastronomy',
    validUntil: 'Valid throughout this month',
    discount: 'COMPLIMENTARY WINE FLIGHT',
    code: 'STATUSFEAST',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'midnight-shopping',
    title: 'Midnight Shopping',
    subtitle: 'After-Hours Glow',
    description: 'Exclusive nocturnal discounts, live DJ lounges, complimentary sparkling drinks, and double loyalty points past 9 PM.',
    store: 'Entire Status Mall',
    category: 'Lifestyle & Tech',
    validUntil: 'Every Friday Night',
    discount: 'DOUBLE VIP POINTS',
    code: 'NIGHTSTATUS',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'entertainment-pass',
    title: 'Family Entertainment Pass',
    subtitle: 'Cinematic Thrills',
    description: 'Bundle 4 IMAX screen tickets, arcade credits at Virtual Reality Arena, and family dining vouchers with 30% savings.',
    store: 'CineStatus 8-Screen Multiplex',
    category: 'Entertainment',
    validUntil: 'Valid all season long',
    discount: 'SAVE 30% ON BUNDLE',
    code: 'IMAXFAMILY',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1000&auto=format&fit=crop'
  }
];

export const EVENTS_DATA: MallEvent[] = [
  {
    id: 'live-jazz-symphony',
    title: 'Live Twilight Jazz Symphony',
    category: 'Live Music',
    date: 'Fri, Sep 12',
    time: '7:30 PM – 10:00 PM',
    location: 'Central Glass Atrium',
    description: 'An acoustic evening featuring international jazz quartets playing under our 40-meter glass dome with synchronized kinetic illumination.',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'autumn-couture-runway',
    title: 'Status Autumn Runway Preview',
    category: 'Fashion Shows',
    date: 'Sat, Sep 20',
    time: '6:00 PM – 8:30 PM',
    location: 'Grand Rotunda Stage',
    description: 'Top luxury designers present their upcoming seasonal autumn/winter capsule collections, accompanied by bespoke VIP front-row seating.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'kids-robotics-maker',
    title: 'Junior Robotics & Future Lab',
    category: 'Kids Activities',
    date: 'Every Sunday',
    time: '11:00 AM – 2:00 PM',
    location: 'Level 2 • Discovery Hub',
    description: 'Hands-on interactive robotics, drone piloting simulators, and LEGO architectural challenges for young inventors aged 6-14.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'artisan-food-bazaar',
    title: 'Global Gastronomy Week',
    category: 'Food Festivals',
    date: 'Sep 25 – Sep 28',
    time: 'All Day',
    location: 'Sky Promenade Terraces',
    description: 'Award-winning guest chefs, artisanal chocolate tastings, molecular mocktail workshops, and street-food stalls from 12 countries.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'autumn-kinetic-lanterns',
    title: 'Celestial Kinetic Light Installation',
    category: 'Seasonal Events',
    date: 'Now Through Oct 15',
    time: 'Sunset – 11:00 PM',
    location: 'Rooftop Skydeck',
    description: 'Over 500 responsive kinetic floating illuminated lanterns creating an ethereal stargazing and photography experience above the city.',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1000&auto=format&fit=crop'
  }
];

export const MALL_FACILITIES = [
  {
    title: 'FREE HIGH-SPEED WI-FI',
    subtitle: 'Throughout Mall',
    detail: 'Seamless ultra-fast Wi-Fi 6 connectivity across all four levels, gardens, and parking areas.',
    icon: 'Wifi'
  },
  {
    title: 'AMPLE SMART PARKING',
    subtitle: '2,000+ Spaces',
    detail: 'State-of-the-art camera guidance, EV superchargers, license plate recognition, and valet concierge.',
    icon: 'Car'
  },
  {
    title: 'EASY TRANSIT ACCESS',
    subtitle: 'Metro & Bus Connected',
    detail: 'Direct air-conditioned pedestrian skybridge connecting to Metro Central Station and transit terminals.',
    icon: 'Train'
  },
  {
    title: 'FAMILY FRIENDLY',
    subtitle: 'Fun For Everyone',
    detail: 'Dedicated baby care suites, complimentary designer strollers, family restrooms, and supervised playzones.',
    icon: 'Heart'
  }
];

export const MALL_FLOORS = [
  {
    level: 'Level G',
    name: 'Ground Level — The Grand Rotunda',
    description: 'Flagship luxury maisons, horology boutiques, concierge desk, valet drop-off, and central glass atrium.',
    highlights: ['Apple Flagship', 'Gucci', 'Rolex Boutique', 'Aēsop', 'Grand Rotunda Water Feature']
  },
  {
    level: 'Level 1',
    name: 'Level 1 — High Fashion & Beauty',
    description: 'International modern apparel, cosmetics department, curated shoe lounges, and light espresso bars.',
    highlights: ['ZARA', 'Sephora', 'H&M Home', 'Dyson Demo Store', 'Le Glacé Pâtisserie']
  },
  {
    level: 'Level 2',
    name: 'Level 2 — Athletics, Tech & Lifestyle',
    description: 'Sporting goods, sneaker laboratories, lifestyle concepts, interactive electronics, and urban dining.',
    highlights: ['Nike Rise', 'Adidas Originals', "Levi's Tailor Shop", 'MUJI', 'Bao & Broth Ramen']
  },
  {
    level: 'Level 3',
    name: 'Level 3 — Gourmet Terraces & Multiplex',
    description: 'Piazza dining terraces, authentic global cuisines, and the CineStatus 8-Screen IMAX Multiplex.',
    highlights: ['8-Screen CineStatus IMAX', 'Trattoria Milano', 'Sakura Omakase', 'Gaming Lounge']
  },
  {
    level: 'Level 4',
    name: 'Rooftop — Sky Lounge & Stargazing Deck',
    description: 'Open-air botanical sky terraces, sunset cocktail lounges, fine steaks, and kinetic light gardens.',
    highlights: ['Lumina Sky Lounge', 'Botanical Canopy Walk', 'Open Air Amphitheatre', 'Celestial Installations']
  }
];
