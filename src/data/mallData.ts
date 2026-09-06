import { Store, Restaurant, Offer, MallEvent } from '../types';

export const MALL_INFO = {
  name: 'STATUS MALL',
  tagline: 'Where Shopping Meets Lifestyle',
  shortLocation: 'EDATHANATTUKARA, PALAKKAD',

  address: {
    line1: 'Status Mall, Melattur Road',
    line2: 'Kottappalla, Alanallur-III',
    line3: 'Edathanattukara, Palakkad District',
    state: 'Kerala',
    postalCode: '678601',
    country: 'India',
    fullFormatted:
      'Status Mall, Melattur Road, Kottappalla, Alanallur-III, Edathanattukara, Palakkad District, Kerala - 678601, India.',
    lines: [
      'Status Mall',
      'Melattur Road',
      'Kottappalla, Alanallur-III',
      'Edathanattukara',
      'Palakkad District, Kerala — 678601',
      'India'
    ],
    cityDistrict: 'Edathanattukara, Palakkad'
  },

  operatingHours: {
    open: '9:00 AM',
    close: '10:00 PM',
    days: 'Open 7 days a week',
    display: '9:00 AM — 10:00 PM',
    badge: 'OPEN DAILY • 9:00 AM — 10:00 PM',
    scheduleBadge: '7 DAYS A WEEK'
  },

  contacts: [
    '+91 8590140783',
    '+91 9544529764'
  ],

  contactLinks: [
    { display: '+91 8590140783', tel: 'tel:+918590140783' },
    { display: '+91 9544529764', tel: 'tel:+919544529764' }
  ],

  parking: {
    available: true,
    title: 'PARKING',
    description:
      'Dedicated, spacious on-site vehicle parking lots accommodating shoppers.',
    visitorWording:
      'Dedicated on-site parking is available for shoppers, providing spacious vehicle parking for a convenient visit.',
    summary:
      'Dedicated, spacious on-site vehicle parking is available for shoppers.'
  },

  location: {
    googleMapsUrl:
      'https://maps.app.goo.gl/M6R9g4mGbrsSuCJw6',
    address:
      'Status Mall, Melattur Road, Kottappalla, Alanallur-III, Edathanattukara, Palakkad District, Kerala - 678601, India.',
    shortRegion: 'Edathanattukara, Palakkad'
  },

  stats: {
    storesCount: '10 Confirmed Tenants',
    foodOutletsCount: 'Food Court Flagship',
    entertainment: 'Kids Playzone',
    parkingType: 'Dedicated On-Site'
  },

  // Backward-compatibility properties
  hours: {
    weekdays: '9:00 AM — 10:00 PM',
    weekends: '9:00 AM — 10:00 PM',
    daily: '9:00 AM — 10:00 PM (Open 7 Days a Week)'
  },
  contact: {
    phone: '+91 8590140783',
    secondaryPhone: '+91 9544529764',
    address:
      'Status Mall, Melattur Road, Kottappalla, Alanallur-III, Edathanattukara, Palakkad District, Kerala - 678601, India.'
  }
};

export const TOP_BRANDS = [
  { name: 'Faaza', category: 'Fashion Showroom' },
  { name: 'Zuqa Boutique', category: 'Fashion & Lifestyle' },
  { name: 'Hayaz Gold & Diamonds', category: 'Jewellery' },
  { name: 'svgStoroot', category: 'Home & Lifestyle' },
  { name: 'Big Zee', category: 'Beauty & Cosmetics' },
  { name: 'Rayyan Fancy & Gift', category: 'Jewellery & Accessories' },
  { name: 'Anchor Spaces', category: 'Coming Soon' },
  { name: 'Bell Pepper Restaurant', category: 'Dining' },
  { name: 'Kids Playzone', category: 'Entertainment' },
  { name: 'Conference Hall', category: 'Events & Commercial' }
];

export const STORES_DATA: Store[] = [
  {
    id: 'faaza',
    name: 'Faaza',
    category: 'Fashion',
    description: 'Premium fashion brand showroom.',
    floor: 'Ground Floor',
    status: 'Open',
    displayType: 'Premium fashion showroom',
    tags: ['Fashion', 'Showroom', 'Premium'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'zuqa-boutique',
    name: 'Zuqa Boutique',
    category: 'Fashion & Lifestyle',
    description: 'Trending boutique focusing on lifestyle, Eid collections, and designer dresses.',
    floor: 'Ground Floor',
    status: 'Open',
    tags: ['Lifestyle', 'Eid Collections', 'Designer Dresses', 'Fashion'],
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'hayaz-gold-diamonds',
    name: 'Hayaz Gold & Diamonds',
    category: 'Jewellery',
    description: 'Major branch anchoring the jewelry and bridal segment.',
    floor: 'Ground Floor',
    status: 'Open',
    tags: ['Gold', 'Diamonds', 'Jewellery', 'Bridal'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'svgstoroot',
    name: 'svgStoroot',
    category: 'Home & Lifestyle',
    description: 'Speciality concept store offering handcrafted sustainable lights, eco-friendly home decor, and unique gifts.',
    floor: 'Ground Floor',
    status: 'Open',
    tags: ['Handcrafted', 'Sustainable Lights', 'Eco-Friendly', 'Home Decor', 'Gifts'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'big-zee',
    name: 'Big Zee',
    category: 'Beauty & Cosmetics',
    description: 'Skincare, beauty essentials, and cosmetic gift kits.',
    floor: 'Ground Floor',
    status: 'Open',
    tags: ['Skincare', 'Beauty', 'Cosmetics', 'Gift Kits'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'rayyan-fancy-gift',
    name: 'Rayyan Fancy & Gift',
    category: 'Jewellery & Accessories',
    description: 'Premium rental jewelry and accessory store tailored for brides.',
    floor: 'Ground Floor',
    status: 'Open',
    tags: ['Rental Jewellery', 'Accessories', 'Bridal'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'anchor-spaces',
    name: 'Anchor Spaces',
    category: 'Coming Soon',
    description: 'Coming soon spaces designated for a hypermarket and large bridal studios.',
    floor: 'Ground Floor',
    status: 'Coming Soon',
    tags: ['Hypermarket', 'Bridal Studios'],
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'bell-pepper-restaurant',
    name: 'Bell Pepper Restaurant',
    category: 'Dining',
    description: 'Coming soon flagship restaurant situated in the dedicated food court.',
    floor: 'Second Floor',
    status: 'Coming Soon',
    tags: ['Restaurant', 'Food Court', 'Dining'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'kids-playzone',
    name: 'Kids Playzone',
    category: 'Entertainment',
    description: 'An active indoor family amusement area featuring slides, interactive zones, and soft play spaces.',
    floor: 'Second Floor',
    status: 'Open',
    displayType: 'Open / Entertainment',
    tags: ['Kids', 'Family', 'Playzone', 'Indoor Entertainment'],
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'conference-hall',
    name: 'Conference Hall',
    category: 'Events & Commercial',
    description: 'Available commercial space for business meetings, community gatherings, and local events.',
    floor: 'Second Floor',
    status: 'Available',
    displayType: 'EVENTS & COMMERCIAL SPACE',
    tags: ['Business Meetings', 'Community Events', 'Local Events', 'Conferences'],
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop'
  }
];

export const RESTAURANTS_DATA: Restaurant[] = [
  {
    id: 'bell-pepper-restaurant',
    name: 'Bell Pepper Restaurant',
    cuisine: 'Multi-Cuisine & Food Court Flagship',
    category: 'Family Dining',
    floor: 'Second Floor',
    rating: 5.0,
    reviewCount: 0,
    priceRange: '$$',
    status: 'Closes at 11 PM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    signatureDish: 'Flagship Food Court Cuisine',
    description: 'Coming soon flagship restaurant situated in the dedicated food court.'
  }
];

export const OFFERS_DATA: Offer[] = [
  {
    id: 'zuqa-eid-privilege',
    title: 'Festive & Eid Collection Privilege',
    subtitle: 'Designer Lifestyle Drops',
    description: 'Exclusive seasonal showcase of curated designer dresses and bespoke festive wear at Zuqa Boutique.',
    store: 'Zuqa Boutique',
    category: 'Fashion & Lifestyle',
    validUntil: 'Seasonal Privilege',
    discount: 'VIP ACCESS',
    code: 'ZUQASTYLE',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'hayaz-bridal-consultation',
    title: 'Bridal Diamond & Gold Consultation',
    subtitle: 'Heritage Bridal Masterpieces',
    description: 'Complimentary private jewellery styling and diamond appraisal sessions at Hayaz Gold & Diamonds.',
    store: 'Hayaz Gold & Diamonds',
    category: 'Jewellery',
    validUntil: 'By Appointment',
    discount: 'EXCLUSIVE BRIDAL APPOINTMENT',
    code: 'HAYAZGOLD',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'svgstoroot-sustainable-lighting',
    title: 'Sustainable Lighting & Eco-Decor',
    subtitle: 'Handcrafted Ambience',
    description: 'Discover eco-friendly lighting sculptures and artisanal home gifts handcrafted with sustainable materials.',
    store: 'svgStoroot',
    category: 'Home & Lifestyle',
    validUntil: 'Current Season',
    discount: 'CURATED GIFT SETS',
    code: 'SVGECO',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'big-zee-beauty-kit',
    title: 'Skincare Essentials & Gift Kits',
    subtitle: 'Luxury Glow Routines',
    description: 'Receive custom beauty kit selections and curated skincare essentials for every routine at Big Zee.',
    store: 'Big Zee',
    category: 'Beauty & Cosmetics',
    validUntil: 'Ongoing Privilege',
    discount: 'SIGNATURE KITS',
    code: 'BIGZEEGLOW',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1000&auto=format&fit=crop'
  }
];

export const EVENTS_DATA: MallEvent[] = [
  {
    id: 'conference-hall-summit',
    title: 'Commercial Business & Community Forum',
    category: 'Seasonal Events',
    date: 'Upcoming',
    time: 'Inquire with Concierge',
    location: 'Second Floor • Conference Hall',
    description: 'Available commercial space for corporate meetings, community gatherings, cultural seminars, and local business conferences.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'kids-playzone-weekend',
    title: 'Kids Family Play & Soft Adventure Day',
    category: 'Kids Activities',
    date: 'Every Weekend',
    time: 'All Day',
    location: 'Second Floor • Kids Playzone',
    description: 'An active indoor family amusement area featuring slides, interactive play zones, and soft play spaces for children.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'bridal-jewellery-showcase',
    title: 'Bridal Heritage & Couture Exhibition',
    category: 'Fashion Shows',
    date: 'Seasonal Showcase',
    time: 'During Mall Hours',
    location: 'Ground Floor • Main Promenade',
    description: 'Featuring major bridal and jewellery anchor branches Hayaz Gold & Diamonds, Rayyan Fancy & Gift, and Zuqa Boutique.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
    featured: true
  }
];

export const MALL_FACILITIES = [
  {
    title: 'DEDICATED ON-SITE PARKING',
    subtitle: 'Spacious Shopper Parking',
    detail: 'Dedicated, spacious on-site vehicle parking lots accommodating shoppers for a convenient visit.',
    icon: 'Car'
  },
  {
    title: 'PRIME ROAD LOCATION',
    subtitle: 'Melattur Road, Kottappalla',
    detail: 'Conveniently situated on Melattur Road at Kottappalla, Alanallur-III, Edathanattukara, Palakkad District.',
    icon: 'MapPin'
  },
  {
    title: 'TWO EXPANSIVE FLOORS',
    subtitle: 'Ground & Second Floor',
    detail: 'Ground Floor retail boutiques, jewellery showrooms, and lifestyle stores with Second Floor dining and entertainment.',
    icon: 'Layers'
  },
  {
    title: 'FAMILY ENTERTAINMENT',
    subtitle: 'Kids Playzone & Dining',
    detail: 'Dedicated Kids Playzone amusement area and upcoming Bell Pepper Restaurant situated in the food court.',
    icon: 'Heart'
  }
];

export const MALL_FLOORS = [
  {
    level: 'Ground Floor',
    name: 'Ground Floor — Retail, Fashion & Jewellery',
    description: 'Premier fashion showrooms, designer boutiques, gold & diamond jewellery, handcrafted lights & decor, cosmetics, and anchor spaces.',
    highlights: [
      'Faaza',
      'Zuqa Boutique',
      'Hayaz Gold & Diamonds',
      'svgStoroot',
      'Big Zee',
      'Rayyan Fancy & Gift',
      'Anchor Spaces'
    ]
  },
  {
    level: 'Second Floor',
    name: 'Second Floor — Dining, Entertainment & Commercial',
    description: 'Family indoor amusement, upcoming flagship food court restaurant, and executive commercial conference spaces.',
    highlights: [
      'Bell Pepper Restaurant (Coming Soon)',
      'Kids Playzone',
      'Conference Hall'
    ]
  }
];
