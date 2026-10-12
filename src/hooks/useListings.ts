import { useCallback, useState } from "react";

import { fetchListings } from "@/services/listingsApi";
import type { Listing } from "@/types/listing";

export const useListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadListings = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const listings = await fetchListings();

      setListings(listings);
    } catch (error) {
      console.error(error);

      const errorMsg =
        error instanceof Error
          ? error.message
          : "Something went wrong while fetching listings.";

      setError(errorMsg);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    loadListings,
    listings,
    isLoading,
    error,
  };
};
