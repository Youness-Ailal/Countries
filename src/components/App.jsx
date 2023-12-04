import { useState, useEffect, useReducer } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useCountries } from "../custom-hooks/useCountries";
import CountryPage from "../pages/CountryPage";

function App() {
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

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <HomePage
                region={region}
                setRegion={setRegion}
                query={query}
                setQuery={setQuery}
                dataLoading={dataLoading}
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                filteredCountries={filteredCountries}
                setFilteredCountries={setFilteredCountries}></HomePage>
            }></Route>

          <Route
            path="/:countryName"
            // path={`country`}
            element={<CountryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
