import { useEffect } from "react";

declare global {
  interface Window {
    initialize: () => void;
  }
}

export default function StreetView() {
  useEffect(() => {
    // Dynamically load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }&callback=initialize`;
    script.async = true;
    document.body.appendChild(script);

    // Called when Google Maps JS loads
    window.initialize = () => {
      const location = { lat: 42.345573, lng: -71.098326 }; // Fenway Park

      new google.maps.StreetViewPanorama(
        document.getElementById("pano") as HTMLElement,
        {
          position: location,
          pov: { heading: 34, pitch: 10 },
          zoom: 1,
        }
      );
    };
  }, []);

  return <div id="pano" className="h-screen w-full" />;
}
