import { Map, Marker } from "@vis.gl/react-google-maps";
import type { Coordinates } from "./App";

type Guess = Coordinates | null;

type MiniMapProps = {
  guess: Guess;
  setGuess: (coords: Guess) => void;
};

export default function MiniMap({ guess, setGuess }: MiniMapProps) {
  return (
    <div className="absolute bottom-4 right-4 z-50">
      <div
        className="w-64 h-48 border-2 border-white rounded-lg shadow-lg overflow-hidden 
                      transform transition-all duration-300 ease-in-out origin-bottom-right
                      hover:w-186 hover:h-106"
      >
        <Map
          defaultZoom={2}
          defaultCenter={{ lat: 20, lng: 0 }}
          gestureHandling="greedy"
          disableDefaultUI={true}
          fullscreenControl={true}
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
            className="absolute top-1 left-1 bg-white text-black px-2 py-1 text-xs rounded shadow hover:bg-gray-200 z-50"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
