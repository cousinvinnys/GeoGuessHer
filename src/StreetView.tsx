import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import type { Coordinates } from "./App";

export default function StreetView({ lat, lng }: Coordinates) {
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
