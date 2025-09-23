import StreetView from "./StreetView";
import MiniMap from "./MiniMap";

export default function App() {
  return (
    <div className="relative w-screen h-screen">
      <StreetView lat={42.345573} lng={-71.098326} />
      <MiniMap />
    </div>
  );
}
