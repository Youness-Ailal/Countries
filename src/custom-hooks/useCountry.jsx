import { useEffect, useState } from "react";

export function useCountry({ countryName }) {
  const [country, setCountry] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    setDataLoading(true);

    async function getCountriesAll() {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const data = await res.json();
        setCountry(data);
        setDataLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setDataLoading(false);
      }
    }
    getCountriesAll();
  }, [countryName]);

  return [country, dataLoading];
}
