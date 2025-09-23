import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useDistanceCalculation } from "./useDistanceCalculation";

export default function App() {
  const [guess, setGuess] = useState<{ lat: number; lng: number } | null>(null);

  const location = { lat: 42.345573, lng: -71.098326 };

  const { getDistance } = useDistanceCalculation();

  const handleSubmit = () => {
    if (!guess) return;

    const distance = getDistance(location, guess);

    alert(`Your guess is ${distance.toFixed(2)} km from the location!`);
  };

  return (
    <div className="relative w-screen h-screen">
      <StreetView lat={location.lat} lng={location.lng} />
      <MiniMap guess={guess} setGuess={setGuess} />

      <div className="absolute bottom-4 left-4 z-50">
        <button
          onClick={handleSubmit}
          disabled={!guess}
          className={`px-4 py-2 rounded shadow text-white ${
            guess
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Guess
        </button>
      </div>
    </div>
  );
}
