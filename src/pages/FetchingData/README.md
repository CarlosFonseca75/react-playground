# Zillow-Like Front-End Challenge: Property Search

## Overview

Build a responsive real estate search application using React, TypeScript, and Vite.

**Time limit:** 90 minutes.

## Requirements

### 1. Property Listings

- Fetch property data asynchronously from `/data/listings.json`.
- Display property cards with image, price, address, city, bedrooms, bathrooms, and square footage.
- Display the total number of matching properties.
- Show only active listings.

### 2. Search

- Allow users to search by city or address.
- Search must be case-insensitive.
- Allow users to clear the search.
- Update results when the search changes or is submitted.

### 3. Filters

Provide the following filters:

- Minimum price.
- Maximum price.
- Minimum bedrooms.

Requirements:

- Filters must work together.
- Price boundaries are inclusive.
- Empty filters must not restrict results.
- Results must update when filters change.

### 4. Sorting

Provide the following options:

- Price: low to high.
- Price: high to low.

Sorting must not mutate the original dataset.

### 5. UI States

Handle the following states:

- Loading while data is being fetched.
- Error when the request fails.
- Empty state when no properties match.
- Success state displaying matching properties.

### 6. Styling

- Build a clean, modern real estate interface.
- Use a responsive grid for property cards.
- Maintain consistent spacing, typography, and alignment.
- Ensure the interface works on desktop and mobile.

## Technical Constraints

- Use React and TypeScript.
- Use the existing Vite project.
- Use functional components and React hooks.
- Use the native `fetch` API.
- Do not install additional libraries unless necessary.
- Do not mutate the original dataset.
- Choose an appropriate component structure.

## Acceptance Criteria

- [ ] Property data is fetched asynchronously.
- [ ] All required property information is displayed.
- [ ] Only active listings are shown.
- [ ] Search works by city and address.
- [ ] Filters work individually and together.
- [ ] Both sorting options work correctly.
- [ ] Loading, error, empty, and success states are implemented.
- [ ] The original dataset remains unchanged.
- [ ] The layout is responsive.
- [ ] All interactions work without reloading the page.
