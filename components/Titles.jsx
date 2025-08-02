import { useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";

export default function Titles({ themeColor }) {
  const { setPlanetTitle, planetTitle } = useContext(PlanetContext);

  const getButtonStyle = (title) => ({
    backgroundColor: planetTitle === title ? themeColor : "",
  });

  return (
    <div className="planet-section-buttons flex flex-col gap-4 w-full pt-4">
      <button
        className="text-primary md:text-[1rem] font-bold flex flex-row gap-5 text-xl w-full border border-[var(--border-color)] px-7 py-3 hover:bg-[var(--border-color)] cursor-pointer"
        style={getButtonStyle("overview")}
        onClick={() => setPlanetTitle("overview")}
      >
        <span className="text-secondary font-bold">01</span>OVERVIEW
      </button>

      <button
        className="text-primary md:text-[1rem] font-bold flex flex-row gap-5 text-xl w-full border border-[var(--border-color)] px-7 py-3 hover:bg-[var(--border-color)] cursor-pointer"
        style={getButtonStyle("structure")}
        onClick={() => setPlanetTitle("structure")}
      >
        <span className="text-secondary font-bold">02</span>STRUCTURE
      </button>

      <button
        className="text-primary md:text-[1rem] font-bold flex flex-row gap-5 text-xl w-full border border-[var(--border-color)] px-7 py-3 hover:bg-[var(--border-color)] cursor-pointer"
        style={getButtonStyle("geology")}
        onClick={() => setPlanetTitle("geology")}
      >
        <span className="text-secondary font-bold">03</span>SURFACE
      </button>
    </div>
  );
}
