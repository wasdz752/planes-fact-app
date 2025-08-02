import { PlanetContext } from "../contexts/PlanetContext";
import data from "../src/data.json";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitlesMobile from "./TitlesMobile";
import TableRowsIcon from '@mui/icons-material/TableRows';
import ErrorIcon from '@mui/icons-material/Error';
import SideMenu from "./SideMenu";

export default function Header() {
    const planets = data;
    const { currentPlanet, setCurrentPlanet } = useContext(PlanetContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMenu, setIsMenu] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        
        window.addEventListener("resize", handleResize);
        screenWidth > 768 ? setIsMenu(false) : null

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [screenWidth])

    return (
        <div className="app-header flex lg:py-0 lg:flex-row md:flex-col md:py-8 md:h-auto md:gap-8 items-center space-between py-5 px-8 lg:h-[80px] border-b border-b-[var(--border-color)] justify-between sm:flex-col sm:pb-0 sm:gap-6">
            <div className="header-logo text-primary sm:w-full md:w-auto flex items-center justify-between">
                <h2 className="font-semibold font-antonio text-2xl">THE PLANETS</h2>
                
                {screenWidth < 768 ? isMenu ? <ErrorIcon onClick={() => { setIsMenu(false) }}/> : <TableRowsIcon onClick={() => { setIsMenu(true) }}/> : null}
                
                {isMenu ? <SideMenu setMenu={setIsMenu}/> : null}
            </div>
            <div className="header-buttons sm:hidden md:flex lg:flex flex-row gap-9 lg:h-full md:h-auto md:block lg:block">
                {planets.map((p, index) => {
                    const isSelected = p.name.toLowerCase() === currentPlanet?.toLowerCase();

                    return (
                        <Link 
                            key={index} 
                            to={`/${p.name.toLowerCase()}`}
                            onClick={() => setCurrentPlanet(p.name.toLowerCase())}
                        >
                            <button
                                className={`header-button font-semibold h-full transition-colors duration-200 lg:hover:border-t-4 ${isSelected ? "lg:border-t-4 text-white" : "text-[#92B1C7]"}`}
                                style={{ borderTopColor: p.sectionColor, transition: "all 0.2s ease" }}
                            >
                                {p.name.toUpperCase()}
                            </button>
                        </Link>
                    );
                })}
            </div>

            {screenWidth < 768 ? <TitlesMobile /> : null}
        </div>
    );
}
