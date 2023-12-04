/* eslint-disable react/prop-types */

import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "../styles/Country.scss";
import Header from "../components/Header";
import Container from "../components/Container";
import CountryPageCard from "../components/CountryPageCard";
import CountryPageCardSkeleon from "../components/CountryPageCardSkeleton";

export default function CountryPage() {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, seIsError] = useState(false);

  useEffect(() => {
    async function getCountry() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true
          `
        );
        const data = await res.json();
        if (!res.ok) throw new Error("we couldn fetch the county data");
        setCountry(data);
      } catch (err) {
        seIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getCountry();
  }, [countryName]);

  return (
    <main>
      <Header />
      <Container>
        <button className="back" onClick={() => navigate(-1)}>
          <IoMdArrowBack></IoMdArrowBack> Back
        </button>
        {isLoading && <CountryPageCardSkeleon></CountryPageCardSkeleon>}
        {!isLoading && <CountryPageCard country={country[0]}></CountryPageCard>}
      </Container>
    </main>
  );
}
