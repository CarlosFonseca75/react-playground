import type { Filters } from "@/types/listing";

export const DEFAULT_FILTERS: Filters = {
  cityOrAddress: undefined,
  minPrice: undefined,
  maxPrice: undefined,
  bedrooms: undefined,
  sortBy: "asc",
};
