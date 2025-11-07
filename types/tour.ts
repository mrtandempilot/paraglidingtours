export interface Tour {
  id: number;
  name: string;
  price: string;
  duration: string;
  description: string;
  includes: string[];
  color: string;
  image_url?: string;
  featured?: boolean;
  created_at?: string;
}
