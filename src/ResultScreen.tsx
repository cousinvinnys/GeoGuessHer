import type { Coordinates } from "./App";

type ResultScreenProps = {
  distance: number;
  photoUrl: string;
  onNextRound: () => void;
};

export default function ResultScreen({
  distance,
  photoUrl,
  onNextRound,
}: ResultScreenProps) {
  return (
    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-50">
      <h2 className="text-2xl font-bold mb-4">Round Results</h2>
      <p className="mb-4 text-lg">You were {distance.toFixed(2)} km away!</p>

      <img
        src={photoUrl}
        alt="Memory photo"
        className="max-h-[70vh] w-auto rounded-xl shadow-lg mb-6 border-2 border-white"
      />

      <button
        onClick={onNextRound}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-lg shadow-md"
      >
        Next Round
      </button>
    </div>
  );
}
