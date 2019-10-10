import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import PotdCard from "../potd/PotdCard";

export default function PicOfTheDay() {
  const [potd, setPotd] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=1leZ4XOu2IffcnxxzRXfNq2gJ27VbBYxQxEJLIWW"
      )
      .then(res => {
        setPotd(res.data);
      })
      .catch(err => {
        console.log(`there was an error retrieving ${err}`);
      });
  }, []);

  return (
    <PotdWrapper className="potd-wrapper">
      <h1> NASA PHOTO OF THE DAY API! </h1>
      <PotdCard
        title={potd.title}
        date={potd.date}
        hdUrl={potd.hdurl}
        explanation={potd.explanation}
      />
    </PotdWrapper>
  );
}
const PotdWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  .potd-card {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #b3cde0;
    .potd {
      margin: 0 auto;
      max-width: 600px;
      width: 80%;
      max-height: auto;
    }
    h2 {
      font-size: 2.4rem;
      margin: 4% auto 0;
      @media (max-width: 567px) {
        font-size: 1.8rem;
      }
      @media (max-width: 405px) {
        font-size: 1.4rem;
      }
    }
    h3 {
      font-size: 1.6rem;
      @media (max-width: 405px) {
        font-size: 1.2rem;
      }
    }

    p {
      padding: 0 10%;
      max-width: 1000px;
      font-size: 1.4rem;
    }
  }
`;
