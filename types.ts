
export interface Bike {
  id: string;
  name: string;
  tagline: string;
  price: string;
  engine: string;
  mileage: string;
  power: string;
  image: string;
  category: 'Commuter' | 'Premium' | 'Sports' | 'Electric';
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Dealer {
  id: number;
  name: string;
  address: string;
  phone: string;
  coords: { lat: number; lng: number };
}
