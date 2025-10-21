import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useDistanceCalculation } from "./useDistanceCalculation";
import SubmitButton from "./SubmitButton";
import WelcomeScreen from "./WelcomeScreen";
import { useLocationManager } from "./useLocationManager";
import ResultScreen from "./ResultScreen";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default function App() {
  const [guess, setGuess] = useState<Coordinates | null>(null);

  const [hasStarted, setStarted] = useState<boolean>(false);

  const { calculateDistance } = useDistanceCalculation();
  const { location, nextLocation } = useLocationManager();
  const [showResult, setShowResult] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(0);

  const handleSubmit = () => {
    if (!guess) return;
    const distance = calculateDistance(location, guess);
    setDistance(distance);
    setShowResult(true);
  };

  const handleNextRound = () => {
    setGuess(null);
    setShowResult(false);
    nextLocation();
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
          {showResult && (
            <ResultScreen
              distance={distance}
              photoUrl={location.photoUrl}
              onNextRound={handleNextRound}
            />
          )}
        </>
      )}
    </div>
  );
}
