type GameOverMenuProps = {
  handleRestart: () => void;
  totalPoints: number;
  maxPoints: number;
};

export default function GameOverMenu({
  handleRestart,
  totalPoints,
  maxPoints,
}: GameOverMenuProps) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-xl shadow-xl p-6 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Game Over</h2>

        <div className="mb-6 text-center">
          <p className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg">
            You scored {totalPoints} out of {maxPoints}!
          </p>
        </div>

        <p className="mb-6 text-lg">
          I hope you enjoyed this little memento to the last four years
          together. Here's to many more :)
        </p>

        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-lg shadow-md transition"
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}
