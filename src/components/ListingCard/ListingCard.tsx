import type { Listing } from "@/types/listing";

import styles from "./ListingCard.module.scss";

interface ListingCardProps {
  listing: Listing;
}
export const ListingCard = ({ listing }: ListingCardProps) => {
  const details = `${listing.bedrooms} beds · ${listing.bathrooms} baths · ${listing.squareFeet} sqft`;

  return (
    <article className={styles.card}>
      <img
        src={listing.imageUrl}
        alt={`Listing image ${listing.id}`}
        width={200}
        height="auto"
        className={styles.img}
      />

      <div className={styles.body}>
        <h2>{listing.price}</h2>
        <h3>{listing.address}</h3>
        <p>{listing.city}</p>
        <p>{details}</p>
      </div>
    </article>
  );
};
