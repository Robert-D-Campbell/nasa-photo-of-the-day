import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";
import RoverCard from "./RoverCard";

export default function RoverGrid() {
  const [roverImages, setRoverImage] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?&api_key=1leZ4XOu2IffcnxxzRXfNq2gJ27VbBYxQxEJLIWW"
      )
      .then(res => {
        const roverImg = res.data.latest_photos;
        setRoverImage(roverImg);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <RoverWrapper className="rover-wrapper">
      {roverImages.map(image => {
        return (
          <RoverCard
            key={image.id}
            image={image.img_src}
            rover={image.rover.name}
            status={image.rover.status}
          />
        );
      })}
    </RoverWrapper>
  );
}
const RoverWrapper = styled.div`
  margin: 5% auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #b3cde0;
  text-align: center;
  .rover-card {
    max-width: 420px;
    margin: 2%;
  }
`;
