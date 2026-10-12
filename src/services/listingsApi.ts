import type { Listing } from "@/types/listing";

export const fetchListings = async (): Promise<Listing[]> => {
  const response = await fetch("/data/listings.json");

  if (!response.ok) {
    throw new Error("Something went wrong while fetching listings.");
  }

  const listings: Listing[] = await response.json();

  return listings;
};
