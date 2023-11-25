/* eslint-disable react/prop-types */
import "../styles/Country.scss";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function CountryCard({ country, onSelectCountry }) {
  const { name, flags, population, region, capital } = country;
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div onClick={onSelectCountry} className="country">
      <img src={flags.svg} alt={flags.alt} />
      <div className="country__bottom">
        <h2>{name.common || <Skeleton></Skeleton>} </h2>
        <p>
          <strong>population: </strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Region: </strong> {region}
        </p>
        <p>
          <strong>Capital: </strong> {capital?.at(0) || "unkown"}
        </p>
      </div>
    </div>
  );
}
