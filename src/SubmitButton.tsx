import type { Coordinates } from "./App";

type SubmitButtonProps = {
  handleSubmit: () => void;
  guess: Coordinates | null;
};

export default function SubmitButton({
  handleSubmit,
  guess,
}: SubmitButtonProps) {
  return (
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
  );
}
