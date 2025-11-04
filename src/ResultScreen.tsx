type ResultScreenProps = {
  distance: number;
  photoUrl: string;
  onNextRound: () => void;
  roundScore: number;
  totalScore: number;
};

export default function ResultScreen({
  distance,
  photoUrl,
  onNextRound,
  roundScore,
  totalScore,
}: ResultScreenProps) {
  return (
    <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white z-50">
      <p className="mb-4 text-lg font-mono font-semibold text-white drop-shadow-md">
        You were {distance.toFixed(2)} miles away!
      </p>
      <div className="mb-6 text-center">
        <p className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg">
          You scored {roundScore} points this round!
        </p>
        <p className="text-xl font-semibold font-mono text-blue-400 drop-shadow-md mt-2">
          Total score: {totalScore}
        </p>
      </div>

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
