import { useEffect, useState } from "react";
import "../styles/Region.scss";
import { SlArrowDown } from "react-icons/sl";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", ""];

export default function SelectRegion({ region, setRegion, disabled }) {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    function callBack(e) {
      !e.target.parentElement.classList.contains("region")
        ? setchecked(false)
        : null;
    }
    document.addEventListener("click", callBack);
    return () => document.removeEventListener("click", callBack);
  }, [setchecked]);
  return (
    <div className="region">
      <input
        disabled={disabled}
        checked={checked}
        onChange={e => setchecked(e.target.checked)}
        type="checkbox"
        id="filter-region"
        style={{ display: "none" }}></input>
      <label htmlFor="filter-region" className="region__top">
        {!region ? "Filter by Region" : region}
        <SlArrowDown
          style={{
            rotate: `${checked ? "180deg" : "0deg"}`,
            transition: ".2s",
          }}></SlArrowDown>
      </label>
      <div className={`region__bottom ${checked ? "" : "hide"}`}>
        {regions.map(el => (
          <div onClick={() => setRegion(el)} key={el}>
            {el ? el : "Reset"}
          </div>
        ))}
      </div>
    </div>
  );
}
