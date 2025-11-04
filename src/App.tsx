import { useState } from "react";
import StreetView from "./StreetView";
import MiniMap from "./MiniMap";
import { useDistanceCalculation } from "./useDistanceCalculation";
import SubmitButton from "./SubmitButton";
import WelcomeScreen from "./WelcomeScreen";
import { MAX_TOTAL_POINTS, useLocationManager } from "./useLocationManager";
import ResultScreen from "./ResultScreen";
import GameOverMenu from "./GameOverMenu";
import { calculatePoints } from "./calculatePoints";

export type Coordinates = {
  lat: number;
  lng: number;
};

export default function App() {
  const [guess, setGuess] = useState<Coordinates | null>(null);
  const [score, setScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);

  const [hasStarted, setStarted] = useState<boolean>(false);

  const { calculateDistance } = useDistanceCalculation();
  const { location, nextLocation, isGameOver, resetLocations, setIsGameOver } =
    useLocationManager();
  const [showResult, setShowResult] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(0);

  const handleSubmit = () => {
    if (!guess) return;
    const distance = calculateDistance(location, guess);
    const points = calculatePoints(distance);
    setRoundScore(points);
    setScore((prev) => prev + points);

    setDistance(distance);
    setShowResult(true);
  };

  const handleNextRound = () => {
    setGuess(null);
    setShowResult(false);
    nextLocation();
  };

  const handleRestart = () => {
    setGuess(null);
    setShowResult(false);
    resetLocations();
    setScore(0);
    setIsGameOver(false);
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
              roundScore={roundScore}
              totalScore={score}
              photoUrl={location.photoUrl}
              onNextRound={handleNextRound}
            />
          )}
          {isGameOver && (
            <GameOverMenu
              handleRestart={handleRestart}
              totalPoints={score}
              maxPoints={MAX_TOTAL_POINTS}
            />
          )}
        </>
      )}
    </div>
  );
}
