import { useEffect, useState } from "react";

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    setDataLoading(true);

    async function getCountriesAll() {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data.sort((a, b) => b.population - a.population));
        setDataLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoading(false);
      }
    }
    getCountriesAll();
  }, []);

  return [countries, dataLoading];
}
