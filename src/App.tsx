import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useState } from "react";

export default function App() {
  const [guess, setGuess] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <div className="relative w-screen h-screen">
      <StreetView lat={42.345573} lng={-71.098326} />
      <MiniMap guess={guess} setGuess={setGuess} />
    </div>
  );
}
