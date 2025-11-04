import type { Coordinates } from "./App";

export const useDistanceCalculation = () => {
  const calculateDistance = (
    location: Coordinates,
    guess: Coordinates
  ): number => {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(location.lat - guess.lat);
    const dLng = toRad(location.lng - guess.lng);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(guess.lat)) *
        Math.cos(toRad(location.lat)) *
        Math.sin(dLng / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c * 0.621371; // convert to miles
  };

  return { calculateDistance };
};
