import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useDistanceCalculation } from "./useDistanceCalculation";
import SubmitButton from "./SubmitButton";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default function App() {
  const [guess, setGuess] = useState<Coordinates | null>(null);

  const location: Coordinates = { lat: 42.345573, lng: -71.098326 };

  const { calculateDistance } = useDistanceCalculation();

  const handleSubmit = () => {
    if (!guess) return;

    const distance = calculateDistance(location, guess);

    alert(`Your guess is ${distance.toFixed(2)} km from the location!`);
  };

  return (
    <div className="relative w-screen h-screen">
      <StreetView lat={location.lat} lng={location.lng} />
      <MiniMap guess={guess} setGuess={setGuess} />
      <SubmitButton handleSubmit={handleSubmit} guess={guess}></SubmitButton>
    </div>
  );
}
