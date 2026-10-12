export interface Listing {
  id: string;
  address: string;
  city: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  status: "active" | "pending" | "inactive";
  imageUrl: string;
}

export interface Filters {
  cityOrAddress?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  sortBy?: "asc" | "desc";
}
