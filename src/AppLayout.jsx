import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PlanetSection from "../components/PlanetSection";
import { PlanetContext } from "../contexts/PlanetContext";
import { useLocation } from "react-router-dom";
import data from "./data.json";

export default function AppLayout() {
    const { setCurrentPlanet, setError } = useContext(PlanetContext);
    const location = useLocation();

    useEffect(() => {
        const cleanedPath = location.pathname.replace(/^\//, "").toLowerCase();
        const matchedPlanet = data.find((p) => cleanedPath === p.name.toLowerCase());

        if (matchedPlanet) {
            setCurrentPlanet(matchedPlanet.name.toLowerCase());
            setError(null);
        } else {
            setError("Please enter a valid path or select a planet!");
        }
    }, [location.pathname, setCurrentPlanet, setError]);

    return (
        <div>
            <Header />

            <PlanetSection />
        </div>
    );
}
