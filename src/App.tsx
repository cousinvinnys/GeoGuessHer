import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";

export default function App() {
  const [guess, setGuess] = useState<{ lat: number; lng: number } | null>(null);

  const location = { lat: 42.345573, lng: -71.098326 };

  const handleSubmit = () => {
    if (!guess) return;
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
    const distance = R * c;

    alert(`Your guess is ${distance.toFixed(2)} km from the location!`);
  };

  return (
    <div className="relative w-screen h-screen">
      <StreetView lat={location.lat} lng={location.lng} />
      <MiniMap guess={guess} setGuess={setGuess} />

      {/* Submit Guess Button */}
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
