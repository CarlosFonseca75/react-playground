import type { Filters, Listing } from "@/types/listing";

const normalizeSearch = (value: string): string => value.trim().toLowerCase();

const matchesLocation = (search: string, listing: Listing): boolean => {
  const normalizedSearch = normalizeSearch(search);

  return (
    normalizeSearch(listing.city).includes(normalizedSearch) ||
    normalizeSearch(listing.address).includes(normalizedSearch)
  );
};

const matchesFilters = (listing: Listing, filters: Filters): boolean => {
  const { cityOrAddress, minPrice, maxPrice, bedrooms } = filters;

  if (listing.status !== "active") return false;

  if (cityOrAddress?.trim() && !matchesLocation(cityOrAddress, listing)) {
    return false;
  }

  if (minPrice !== undefined && listing.price < minPrice) {
    return false;
  }

  if (maxPrice !== undefined && listing.price > maxPrice) {
    return false;
  }

  if (bedrooms !== undefined && listing.bedrooms < bedrooms) {
    return false;
  }

  return true;
};

const sortByPrice = (
  listings: Listing[],
  sortBy: Filters["sortBy"],
): Listing[] => {
  const direction = sortBy === "desc" ? -1 : 1;

  return [...listings].sort((a, b) => (a.price - b.price) * direction);
};

export const getFilteredListings = (
  listings: Listing[],
  filters: Filters,
): Listing[] => {
  const filteredListings = listings.filter((listing) =>
    matchesFilters(listing, filters),
  );

  return sortByPrice(filteredListings, filters.sortBy);
};
