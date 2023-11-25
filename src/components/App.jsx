import { useEffect, useState } from "react";
import "../styles/App.scss";
import Header from "./Header";
import Search from "./Search";
import SelectRegion from "./SelectRegion.jsx";
import CountryCard from "./CountryCard.jsx";
import { useCountries } from "../custom-hooks/useCountries.jsx";
import CountryPage from "./CountryPage.jsx";
import { motion } from "framer-motion";
import CountrySkeleton from "./CountrySkeleton.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
export default function App() {
  const [region, setRegion] = useState("");
  const [query, setQuery] = useState("");
  const [countries, dataLoading] = useCountries();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (region && query) {
      const regionCountries = countries.filter(country => {
        return (
          country.region.toLowerCase() === region.toLowerCase() &&
          country.name.common
            .toLocaleLowerCase()
            .includes(query.toLocaleLowerCase())
        );
      });

      setFilteredCountries(regionCountries);
    } else {
      setFilteredCountries(countries);
    }
  }, [region, countries, query]);
  useEffect(() => {
    if (query) {
      const searchedCountries = countries.filter(country =>
        country.name.common
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase())
      );
      setFilteredCountries(searchedCountries);
    } else {
      setFilteredCountries(countries);
    }
  }, [query, countries]);
  useEffect(() => {
    if (region) {
      const regionCountries = countries.filter(
        country => country.region.toLowerCase() === region.toLowerCase()
      );
      setFilteredCountries(regionCountries);
    } else {
      setFilteredCountries(countries);
    }
  }, [region, countries]);
  useEffect(() => {
    if (selectedCountry) {
      document.title = selectedCountry.name.common;
    }
    return () => (document.title = "Countries");
  }, [selectedCountry]);

  return (
    <main>
      <Header></Header>
      <div style={{ display: `${selectedCountry ? "none" : "block"}` }}>
        <Container className={"hero"}>
          <div className="hero__top">
            <Search
              isDisabled={dataLoading}
              setQuery={setQuery}
              query={query}></Search>
            <SelectRegion
              disabled={dataLoading}
              region={region}
              setRegion={setRegion}></SelectRegion>
          </div>
        </Container>
        <SkeletonTheme
          baseColor="hsl(209, 23%, 22%)"
          highlightColor="hsl(207, 26%, 17%)">
          <Container className={"countries"}>
            {dataLoading && <CountrySkeleton cards={32}></CountrySkeleton>}
            {filteredCountries?.map(el => (
              <CountryCard
                onSelectCountry={() => setSelectedCountry(el)}
                country={el}
                key={el.name.common}></CountryCard>
            ))}
          </Container>
        </SkeletonTheme>
      </div>

      {selectedCountry && (
        <Container className={"country-page"}>
          <CountryPage
            onClose={() => setSelectedCountry(null)}
            country={selectedCountry}></CountryPage>
        </Container>
      )}
    </main>
  );
}

function Container({ className, children }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`wraper ${className}`}>
      {children}
    </motion.div>
  );
}
