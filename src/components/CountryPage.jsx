/* eslint-disable react/prop-types */

import "../styles/Country.scss";
import { IoMdArrowBack } from "react-icons/io";
export default function CountryPage({ country, onClose }) {
  const {
    name,
    flags,
    population,
    region,
    capital,
    subregion,
    currencies,
    languages,
    coatOfArms,
    borders,
  } = country;

  return (
    <>
      <button className="back" onClick={onClose}>
        <IoMdArrowBack></IoMdArrowBack> Back
      </button>
      <div className="country_details">
        <img src={flags.svg} alt={flags.alt} className="country-image" />
        <div className="info">
          <h1>
            {name.common}{" "}
            {coatOfArms?.svg && (
              <img
                src={coatOfArms.svg}
                alt={`coat Of Arms of ${name.common}`}></img>
            )}
          </h1>
          <ul>
            <li>
              <strong>Native name </strong>:{" "}
              {Object.values(name?.nativeName)[0]?.common || "Unkown"}{" "}
            </li>
            <li>
              <strong>Population </strong>: {population.toLocaleString()}
            </li>
            <li>
              <strong>Region </strong>: {region}{" "}
            </li>
            <li>
              <strong>Sub Region </strong>: {subregion || "Unkown"}{" "}
            </li>
            <li>
              <strong>Capital </strong>: {capital?.at(0) || "unkown"}{" "}
            </li>
            <li>
              <strong>Currency </strong>:{" "}
              {Object.values(currencies)[0]?.name || "Unkown"}{" "}
            </li>
            <li>
              <strong>Languages </strong>: {Object.values(languages).join(", ")}
            </li>
          </ul>
          {borders && (
            <div className="borders">
              <strong>border countries</strong> :
              {borders.map(border => (
                <span key={border}>{border}</span>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
