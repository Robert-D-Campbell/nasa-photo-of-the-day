import React, { useState, useEffect } from "react";
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
    <div className="rover-container">
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
    </div>
  );
}
