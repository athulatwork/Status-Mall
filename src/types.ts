export interface Store {
  id: string;
  name: string;
  category: 'Fashion' | 'Electronics' | 'Beauty' | 'Lifestyle' | 'Sports' | 'Luxury';
  floor: string;
  zone: string;
  logoText: string;
  image: string;
  description: string;
  tags: string[];
  hours: string;
  phone: string;
  isFeatured?: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  category: 'Fine Dining' | 'Cafés' | 'Fast Casual' | 'Desserts' | 'Family Dining';
  floor: string;
  rating: number;
  reviewCount: number;
  priceRange: '$$' | '$$$' | '$$$$';
  status: 'Open Now' | 'Closes at 11 PM' | 'Open until 12 AM';
  image: string;
  signatureDish: string;
  description: string;
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  store: string;
  category: string;
  validUntil: string;
  discount: string;
  code: string;
  image: string;
}

export interface MallEvent {
  id: string;
  title: string;
  category: 'Live Music' | 'Fashion Shows' | 'Kids Activities' | 'Food Festivals' | 'Seasonal Events';
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
  actionLink?: {
    text: string;
    sectionId: string;
  };
}
