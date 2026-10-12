import type { Listing } from "@/types/listing";

import { ListingCard } from "./ListingCard";
import styles from "./ListingGrid.module.scss";

interface ListingGridProps {
  listings: Listing[];
}
export const ListingGrid = ({ listings }: ListingGridProps) => (
  <div className={styles.container}>
    {listings.map((listing) => (
      <ListingCard key={listing.id} listing={listing} />
    ))}
  </div>
);
