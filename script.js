"use strict";

let btn = document.getElementById("searchBtn");
let cityName = document.getElementById("city-name");
let temp = document.getElementById("temp");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");

btn.addEventListener("click", function () {
  let inputCity = document.getElementById("input-city").value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f3b59305d4msh9b466e3218abfedp1615a8jsn477cd320c6da",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${inputCity}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = inputCity.toUpperCase();
      temp.textContent = data.temp;
      minTemp.textContent = data.min_temp;
      maxTemp.textContent = data.max_temp;
    })
    .catch((err) => console.error(err));
});
