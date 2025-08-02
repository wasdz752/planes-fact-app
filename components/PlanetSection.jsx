import { useState, useEffect, useContext } from "react";
import { PlanetContext } from "../contexts/PlanetContext";
import data from "../src/data.json";
import Titles from "./Titles";

export default function PlanetSection() {
  const { currentPlanet, planetTitle } = useContext(PlanetContext);
  const designedPlanet = data.find((p) => p.name.toLowerCase() === currentPlanet.toLowerCase());
  const planetData = planetTitle === "overview" ? designedPlanet.overview : planetTitle === "structure" ? designedPlanet.structure : designedPlanet.geology;
  const planetProps = [
    { name: "Rotation Time", value: designedPlanet.rotation },
    { name: "Revolution Time", value: designedPlanet.revolution },
    { name: "Radius", value: designedPlanet.radius },
    { name: "Average Temp.", value: designedPlanet.temperature },
  ];

  const [imgWidth, setImgWidth] = useState(designedPlanet.mobileImgWidth);

  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setImgWidth(designedPlanet.desktopImgWidth);
      } else if (width >= 768) {
        setImgWidth(designedPlanet.tabletImgWidth);
      } else {
        setImgWidth(designedPlanet.mobileImgWidth);
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, [designedPlanet]);

  return (
    <section className="planet-section px-[40px] h-auto">
      <div className="planet-container">
        <div className="planet-doc md:flex md:flex-col lg:min-h-[818px] items-center lg:grid lg:grid-cols-[2.2fr_1.2fr]">
          <div className="relative planet-doc-image flex items-center justify-center mx-5 h-[350px] md:my-10">
            <img
              src={`/assets/images/planet-${currentPlanet}${planetTitle === "overview" ? "" : planetTitle === "structure" ? "-internal" : ""}.svg`}
              alt={`Planet ${currentPlanet} Image`}
              style={{ width: imgWidth }}
            />

            {planetTitle === "geology" ? (<div className="absolute h-auto w-auto md:bottom-[-5%] lg:bottom-[-10px] sm:bottom-[50px]"> <img src={`/assets/images/planet-${currentPlanet}-geology.png`} className="h-auto lg:w-[150px] md:w-[100px] sm:w-[70px]"/> </div>) : null}
          </div>

          <div className="planet-doc-details lg:max-w-[347px] lg:flex lg:flex-col lg:items-start lg:justify-center lg:min-h-[530px] grid md:grid-cols[2.2fr_1fr] md:mb-7    ">
            <h1 className="text-primary text-7xl mb-[34px] md:text-[50px]">{currentPlanet.toUpperCase()}</h1>
            <p className="lg:text-[18px] font-[300] mb-[24px] md:text-[15px]" style={{ color: "hsla(0,0%,100%,0.75)" }}>
              {planetData.content}
            </p>
            <p className="font-[300] gap-3 flex mb-[39px]" style={{ color: "hsla(0,0%,100%,0.75)" }}>
              Source:{" "}
              <a
                href={planetData.source}
                className="text-secondary underline text-[17px] font-[600]"
                style={{ cursor: "pointer" }}
              >
                Wikipedia
              </a>
            </p>
            
            {window.innerWidth > 768 ? <Titles themeColor={designedPlanet.sectionColor} /> : null}
          </div>
        </div>

        <div className="planet-props-wrapper flex md:flex-row gap-5 w-full pb-[40px] sm:flex-col">
          {planetProps.map((prop, index) => (
            <div
              key={index}
              className="planet-prop border border-1 border-[var(--border-color)] w-full pt-3 pl-7 lg:pb-7 md:pb-5 flex sm:flex-row md:flex-col sm:p-3 sm:justify-between items-center"
            >
              <h3 className="text-secondary font-[600] lg:text-[13px] sm:text-[10px]" style={{ fontFamily: "League Spartan" }}>
                {prop.name.toUpperCase()}
              </h3>
              <h1 className="text-primary font-[800] lg:text-[36px] md:text-[20px]">{prop.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
