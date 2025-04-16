// Main JavaScript file for the weather app
let cityInput = document.getElementById("cityInput");
let city = document.getElementById("city");
let temperature = document.getElementById("temperature");
let description = document.querySelector(".description");
let clouds = document.getElementById("clouds");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("windSpeed");
let pressure = document.getElementById("pressure");
let visibility = document.getElementById("visibility");
let sunrise = document.getElementById("sunrise");
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); /* prevent the web refresh and from submitting */
  alert("Hello world.");
});
