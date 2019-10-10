import React from "react";

export default function DateHandle() {
  const dateObj = new Date(),
    month = dateObj.getUTCMonth() + 1,
    day = dateObj.getUTCDate(),
    year = dateObj.getUTCFullYear();

  return <div></div>;
}
const newDate = () => {
  const dateObj = new Date(),
    month = dateObj.getUTCMonth() + 1,
    day = dateObj.getUTCDate(),
    year = dateObj.getUTCFullYear();

  if (day < 10) {
    return year + "-" + month + "-" + 0 + day;
  } else {
    return year + "-" + month + "-" + day;
  }
};
