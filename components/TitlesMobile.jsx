import { useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";
import data from "../src/data.json";

export default function TitlesMobile() {
  const { planetTitle, setPlanetTitle, currentPlanet } = useContext(PlanetContext);
  const selectedPlanet = data.find((p) => p.name.toLowerCase() === currentPlanet);
  
  return (
    <div className="header-titles border-t border-[var(--border-color)] h-[60px] w-full flex items-center justify-around px-4">
      <button className={`font-semibold ${planetTitle === "overview" ? "text-primary border-b-4" : "text-secondary"} h-full`} style={{borderBottomColor: selectedPlanet?.sectionColor}} onClick={() => {setPlanetTitle("overview")}}>OVERVIEW</button>
      <button className={`font-semibold ${planetTitle === "structure" ? "text-primary border-b-4" : "text-secondary"} h-full`} style={{borderBottomColor: selectedPlanet?.sectionColor}} onClick={() => {setPlanetTitle("structure")}}>STRUCTURE</button>
      <button className={`font-semibold ${planetTitle === "geology" ? "text-primary border-b-4" : "text-secondary"} h-full`} style={{borderBottomColor: selectedPlanet?.sectionColor}} onClick={() => {setPlanetTitle("geology")}}>SURFACE</button>
    </div>
  );
}