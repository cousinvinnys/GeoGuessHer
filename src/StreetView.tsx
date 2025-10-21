import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";
import type { Coordinates } from "./App";

export default function StreetView({ lat, lng }: Coordinates) {
  const map = useMap();
  const panoRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<google.maps.StreetViewPanorama | null>(null);

  useEffect(() => {
    if (!map || !panoRef.current) return;

    if (!panoramaRef.current) {
      panoramaRef.current = new google.maps.StreetViewPanorama(
        panoRef.current,
        {
          position: { lat, lng },
          pov: { heading: 34, pitch: 10 },
          zoom: 1,
        }
      );

      map.setStreetView(panoramaRef.current);
    } else {
      const current = panoramaRef.current.getPosition();
      if (!current || current.lat() !== lat || current.lng() !== lng) {
        panoramaRef.current.setPosition({ lat, lng });
      }
    }
  }, [map, lat, lng]);

  return <div ref={panoRef} className="h-screen w-full" />;
}
