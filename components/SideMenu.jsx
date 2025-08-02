import { Link } from "react-router-dom";
import data from "../src/data.json";

export default function SideMenu({setMenu}) {
    return (
        <div className="side-menu flex flex-col absolute top-20 bottom-10 right-0 left-0 px-8 z-2 bg-[#070722]">
            {data.map((p) => (
                <Link to={`/${p.name}`} onClick={() => { setMenu(false) }}>
                    <div className="side-menu-button py-5 border-b-1 border-b-[var(--border-color)] flex flex-row gap-5">
                        <span className="block side-menu-design w-5 h-5 rounded-2xl" style={{backgroundColor: p.sectionColor}}>
                        </span>

                        <h2 className="text-primary font-bold text-xl" style={{fontFamily: "League Spartan"}}>{p.name.toUpperCase()}</h2>
                    </div>
                </Link>
            ))}
        </div>
    )
}