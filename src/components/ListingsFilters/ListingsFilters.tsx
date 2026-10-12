import { useState } from "react";

import { DEFAULT_FILTERS } from "@/constants/listings";
import type { Filters } from "@/types/listing";

import { Button } from "../Button/Button";
import styles from "./ListingsFilters.module.scss";

interface ListingsFiltersProps {
  applyFilters: (filters: Filters) => void;
}

export const ListingsFilters = ({ applyFilters }: ListingsFiltersProps) => {
  const [draftFilters, setDraftFilters] = useState<Filters>(DEFAULT_FILTERS);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    applyFilters(draftFilters);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    const newValue =
      value === ""
        ? undefined
        : ["minPrice", "maxPrice", "bedrooms"].includes(name)
          ? Number(value)
          : value;

    setDraftFilters((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleClear = () => {
    setDraftFilters(DEFAULT_FILTERS);
    applyFilters(DEFAULT_FILTERS);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.location}>
        <label htmlFor="cityOrAddress">
          Location
          <input
            id="cityOrAddress"
            name="cityOrAddress"
            type="text"
            placeholder="City or address"
            minLength={3}
            maxLength={50}
            value={draftFilters.cityOrAddress ?? ""}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className={styles.filters}>
        <label htmlFor="minPrice">
          Minimum price
          <select
            id="minPrice"
            name="minPrice"
            value={draftFilters.minPrice ?? ""}
            onChange={handleChange}
          >
            <option value="">No minimum</option>
            <option value={200000}>$200,000</option>
            <option value={300000}>$300,000</option>
            <option value={400000}>$400,000</option>
            <option value={500000}>$500,000</option>
          </select>
        </label>

        <label htmlFor="maxPrice">
          Maximum price
          <select
            id="maxPrice"
            name="maxPrice"
            value={draftFilters.maxPrice ?? ""}
            onChange={handleChange}
          >
            <option value="">No maximum</option>
            <option value={200000}>$200,000</option>
            <option value={300000}>$300,000</option>
            <option value={400000}>$400,000</option>
            <option value={500000}>$500,000</option>
          </select>
        </label>

        <label htmlFor="bedrooms">
          Bedrooms
          <select
            id="bedrooms"
            name="bedrooms"
            value={draftFilters.bedrooms ?? ""}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value={2}>2+ beds</option>
            <option value={3}>3+ beds</option>
            <option value={4}>4+ beds</option>
          </select>
        </label>

        <label htmlFor="sortBy">
          Sort by
          <select
            id="sortBy"
            name="sortBy"
            value={draftFilters.sortBy ?? ""}
            onChange={handleChange}
          >
            <option value="">Recommended</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className={styles.cta}>
        <Button type="submit">Search Homes</Button>
        <Button type="button" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </form>
  );
};
