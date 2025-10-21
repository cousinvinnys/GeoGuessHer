import { useState } from "react";

const LOCATIONS = [
  { lat: 39.7662091, lng: -84.2030796, photoUrl: "/photos/round3.png" },
  { lat: 35.7086348, lng: -83.5589825, photoUrl: "/photos/round2.png" },
  { lat: 45.4379125, lng: 12.3352915, photoUrl: "/photos/round1.png" },
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
