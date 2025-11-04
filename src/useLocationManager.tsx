import { useState } from "react";

const LOCATIONS = [
  { lat: 45.4379125, lng: 12.3352915, photoUrl: "/photos/round1.png" },
  { lat: 35.7086348, lng: -83.5589825, photoUrl: "/photos/round2.png" },
  { lat: 39.7662091, lng: -84.2030796, photoUrl: "/photos/round3.png" },
  { lat: 39.7448632, lng: -84.4766351, photoUrl: "/photos/round4.png" },
  { lat: 39.1576294, lng: -84.5401594, photoUrl: "/photos/round5.png" },
  { lat: 39.7572098, lng: -84.181442, photoUrl: "/photos/round6.png" },
  { lat: 41.4844853, lng: -81.7036412, photoUrl: "/photos/round7.png" },
  { lat: 39.7583818, lng: -84.1934249, photoUrl: "/photos/round8.png" },
  { lat: 47.8015954, lng: 13.0421302, photoUrl: "/photos/round9.png" },
  { lat: 39.8794956, lng: -83.9347724, photoUrl: "/photos/round10.png" },
  { lat: 39.0949566, lng: -84.5180294, photoUrl: "/photos/round11.png" },
  { lat: 47.1400765, lng: 9.5215141, photoUrl: "/photos/round12.png" },
  { lat: 33.839208, lng: -78.6071577, photoUrl: "/photos/round13.png" },
  { lat: 33.8692701, lng: -78.5073181, photoUrl: "/photos/round14.png" },
  { lat: 48.1370316, lng: 11.5756608, photoUrl: "/photos/round15.png" },
  { lat: 38.9218461, lng: -84.181116, photoUrl: "/photos/round16.png" },
  { lat: 32.0694023, lng: -81.0955395, photoUrl: "/photos/round17.png" },
  { lat: 39.1151709, lng: -84.4896895, photoUrl: "/photos/round18.png" },
  { lat: 39.7826529, lng: -84.053659, photoUrl: "/photos/round19.png" },
  { lat: 47.0539578, lng: 8.3099864, photoUrl: "/photos/round20.png" },
];

export const POINTS_PER_ROUND = 100;
export const MAX_TOTAL_POINTS = LOCATIONS.length * POINTS_PER_ROUND;

export function useLocationManager() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [isGameOver, setIsGameOver] = useState(false);

  const nextLocation = () => {
    if (currentIndex < LOCATIONS.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setLocation(LOCATIONS[nextIndex]);
    } else {
      setIsGameOver(true);
    }
  };

  const resetLocations = () => {
    setLocation(LOCATIONS[0]);
    setCurrentIndex(0);
  };

  return {
    location,
    nextLocation,
    resetLocations,
    isGameOver,
    setIsGameOver,
  };
}
