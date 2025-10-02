import { Map, Marker } from "@vis.gl/react-google-maps";
import type { MapCoordinates } from "./App";

type Guess = MapCoordinates | null;

type MiniMapProps = {
  guess: Guess;
  setGuess: (coords: Guess) => void;
};

export default function MiniMap({ guess, setGuess }: MiniMapProps) {
  return (
    <div className="absolute bottom-4 right-4 w-64 h-48 border-2 border-white rounded-lg shadow-lg z-50">
      <Map
        defaultZoom={2}
        defaultCenter={{ lat: 20, lng: 0 }}
        gestureHandling="greedy"
        disableDefaultUI={true}
        style={{ width: "100%", height: "100%", position: "relative" }}
        onClick={(e) =>
          setGuess({
            lat: e.detail.latLng.lat,
            lng: e.detail.latLng.lng,
          })
        }
      >
        {guess && <Marker position={guess} />}
      </Map>

      {guess && (
        <button
          onClick={() => setGuess(null)}
          className="absolute top-1 right-1 bg-white text-black px-2 py-1 text-xs rounded shadow hover:bg-gray-200 z-50"
        >
          Reset
        </button>
      )}
    </div>
  );
}
