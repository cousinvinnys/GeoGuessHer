import { Map } from "@vis.gl/react-google-maps";

export default function MiniMap() {
  return (
    <div className="absolute bottom-4 right-4 w-64 h-48 border-2 border-white rounded-lg overflow-hidden shadow-lg z-50">
      <Map
        defaultZoom={2}
        defaultCenter={{ lat: 20, lng: 0 }} // Roughly world center
        gestureHandling="greedy"
        disableDefaultUI={true}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
