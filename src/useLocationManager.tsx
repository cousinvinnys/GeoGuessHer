import { useState } from "react";
import type { Coordinates } from "./App";

const LOCATIONS: Coordinates[] = [
  { lat: 42.345573, lng: -71.098326 }, // boston
  { lat: 48.858443, lng: 2.294545 }, // paris
  { lat: 40.689245, lng: -74.044542 }, // new york
];

export function useLocationManager() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState(LOCATIONS[0]);

  const nextLocation = () => {
    if (currentIndex < LOCATIONS.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setLocation(LOCATIONS[nextIndex]);
    } else {
      console.log("Game over — no more locations!");
    }
  };

  const resetLocations = () => setCurrentIndex(0);

  return {
    location,
    nextLocation,
    resetLocations,
  };
}
