import { useEffect, useState } from "react";

import { ListingGrid } from "@/components/ListingCard/ListingGrid";
import { ListingsFilters } from "@/components/ListingsFilters/ListingsFilters";
import { DEFAULT_FILTERS } from "@/constants/listings";
import { useListings } from "@/hooks/useListings";
import type { Filters } from "@/types/listing";
import { getFilteredListings } from "@/utils/getFilteredListings";

import styles from "./FetchingData.module.scss";

export const FetchingData = () => {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);

  const { error, isLoading, listings, loadListings } = useListings();

  const filteredListings = getFilteredListings(listings, filters);

  useEffect(() => {
    loadListings();
  }, [loadListings]);

  return (
    <div className={styles.page}>
      <h1>Find your place</h1>
      <p>Discover homes that fit your life!</p>

      <ListingsFilters applyFilters={setFilters} />

      {error && <div>Error: {error}</div>}

      {isLoading && <div>Loading...</div>}

      {filteredListings.length > 0 ? (
        <ListingGrid listings={filteredListings} />
      ) : (
        <div>No listings were found with the active filters.</div>
      )}
    </div>
  );
};
