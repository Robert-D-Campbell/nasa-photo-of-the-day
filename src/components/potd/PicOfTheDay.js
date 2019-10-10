import React, { useState, useEffect } from "react";
import axios from "axios";
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
    <div className="potd-container">
      <PotdCard
        title={potd.title}
        date={potd.date}
        hdUrl={potd.hdurl}
        explanation={potd.explanation}
      />
    </div>
  );
}
