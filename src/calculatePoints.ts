import { POINTS_PER_ROUND } from "./useLocationManager";

export const calculatePoints = (
  distance: number,
  maxPoints = POINTS_PER_ROUND,
  threshold = 50
) => {
  /**
   * distance: in miles
   * maxPoints: points for a perfect guess (distance = 0)
   * threshold: distance at which you get 0 points
   */

  if (distance <= threshold / 50) {
    return maxPoints; // full points if very close
  }

  // Linearly reduce points as distance increases
  const points = Math.max(
    0,
    Math.round(maxPoints * (1 - distance / threshold))
  );
  return points;
};
