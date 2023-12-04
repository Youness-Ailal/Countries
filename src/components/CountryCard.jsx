/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/Country.scss";
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
    <Link className="country__link" to={`${name.common}`}>
      <div onClick={onSelectCountry} className="country">
        {/* <div className="country"> */}
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
    </Link>
  );
}
