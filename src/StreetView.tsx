import { APIProvider, Map, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

type StreetViewProps = {
  lat: number;
  lng: number;
};

function StreetViewInner({ lat, lng }: StreetViewProps) {
  const map = useMap();
  const panoRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!map || !panoRef.current || loaded) return;

    try {
      const panorama = new google.maps.StreetViewPanorama(panoRef.current, {
        position: { lat, lng },
        pov: { heading: 34, pitch: 10 },
        zoom: 1,
      });

      map.setStreetView(panorama);
      setLoaded(true);
    } catch (e) {
      console.error("StreetViewPanorama failed to load:", e);
    }
  }, [map, lat, lng, loaded]);

  return <div ref={panoRef} className="h-screen w-full" />;
}

export default function StreetView({ lat, lng }: StreetViewProps) {
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      {/* Map required for context, minimized in DOM */}
      <Map style={{ width: 1, height: 1, position: "absolute", left: -1000 }} defaultCenter={{ lat, lng }} defaultZoom={14} />
      <StreetViewInner lat={lat} lng={lng} />
    </APIProvider>
  );
}
