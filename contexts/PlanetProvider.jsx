import { PlanetContext } from "./PlanetContext";
import { useState, useEffect } from "react";

function PlanetProvider({children}) {
    const [currentPlanet, setCurrentPlanet] = useState("earth");
    const [planetTitle, setPlanetTitle] = useState("overview")
    const [error, setError] = useState(null);

    useEffect(() => {
        setPlanetTitle("overview");
    }, [currentPlanet])

    return (
        <PlanetContext.Provider value={{currentPlanet, setCurrentPlanet, planetTitle, setPlanetTitle, error, setError}}>
            {children}
        </PlanetContext.Provider>    
    )
}

export default PlanetProvider;