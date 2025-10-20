import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useDistanceCalculation } from "./useDistanceCalculation";
import SubmitButton from "./SubmitButton";
import WelcomeScreen from "./WelcomeScreen";
import { useLocationManager } from "./useLocationManager";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default function App() {
  const [guess, setGuess] = useState<Coordinates | null>(null);

  const [hasStarted, setStarted] = useState<boolean>(false);

  const { calculateDistance } = useDistanceCalculation();
  const { location, nextLocation } = useLocationManager();

  const handleSubmit = () => {
    if (!guess) return;

    const distance = calculateDistance(location, guess);

    alert(`Your guess is ${distance.toFixed(2)} km from the location!`);

    nextLocation();
    setGuess(null);
  };

  const clickBegin = () => {
    setStarted(true);
  };

  return (
    <div className="relative w-screen h-screen">
      <WelcomeScreen onStart={clickBegin}></WelcomeScreen>
      {hasStarted && (
        <>
          <StreetView lat={location.lat} lng={location.lng} />
          <MiniMap guess={guess} setGuess={setGuess} />
          <SubmitButton
            handleSubmit={handleSubmit}
            guess={guess}
          ></SubmitButton>
        </>
      )}
    </div>
  );
}
