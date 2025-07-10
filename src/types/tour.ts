export interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
  highlights?: string[];
}
