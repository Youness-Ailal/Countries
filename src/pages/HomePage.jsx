import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCountries } from "../custom-hooks/useCountries.jsx";
import { SkeletonTheme } from "react-loading-skeleton";

import "../styles/App.scss";

import Header from "../components/Header.jsx";
import Search from "../components/Search.jsx";
import SelectRegion from "../components/SelectRegion.jsx";
import CountryCard from "../components/CountryCard.jsx";
import CountryPage from "../components/CountryPage.jsx";
import CountrySkeleton from "../components/CountrySkeleton.jsx";
import Container from "../components/Container.jsx";

export default function HomePage({
  filteredCountries,
  dataLoading,
  setQuery,
  query,
  region,
  setRegion,
  setSelectedCountry,
  selectedCountry,
}) {
  return (
    <main>
      <Header></Header>
      {/* <div style={{ display: `${selectedCountry ? "none" : "block"}` }}> */}
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

      <Container className={"countries"}>
        {dataLoading && <CountrySkeleton cards={32}></CountrySkeleton>}
        {filteredCountries?.map(el => (
          <CountryCard
            onSelectCountry={() => setSelectedCountry(el)}
            country={el}
            key={el.name.common}></CountryCard>
        ))}
      </Container>

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
