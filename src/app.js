// Main JavaScript file for the weather app
let todayDate = document.getElementById("todayDate") // Get the current date
let cityInput = document.getElementById("cityInput")
let city = document.getElementById("city")
let temperature = document.getElementById("temperature")
let feelsLike = document.getElementById("feelsLike")
let description = document.querySelector(".description")
let clouds = document.getElementById("clouds")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("windSpeed")
let pressure = document.getElementById("pressure")
let visibility = document.getElementById("visibility")
let sunrise = document.getElementById("sunrise")
let lastUpdated = document.getElementById("lastUpdated")
let errorMessage = document.getElementsByClassName("error-message")[0]
let form = document.querySelector("form")

window.addEventListener("load", () => {
  const [nav] = performance.getEntriesByType("navigation")
  if (nav) {
    gtag("event", "page_load", {
      event_category: "Performance",
      value: Math.round(nav.loadEventEnd - nav.startTime),
    })
  }
})

form.addEventListener("submit", (event) => {
  event.preventDefault() /* prevent the web refresh and from submitting */
  if (cityInput.value == "") {
    errorMessage.style.display = "block" // Show the error message
    errorMessage.textContent = "Please enter a city name"
  } else {
    // ← send a custom GA event for this search
    gtag("event", "city_search", {
      event_category: "WeatherApp",
      event_label: cityInput.value,
      value: 1,
    })
    searchWeather()
  }
})

/* document.getElementById("view-dashboard").addEventListener("click", () => {
  gtag("event", "view_dashboard_click", {
    event_category: "WeatherApp",
    event_label: "Dashboard Link",
  })
}) */

let id = "a009f74addab8c8cb112ac3dc8b9b232" // Your OpenWeatherMap API key
let url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + id // Base URL for the OpenWeatherMap API
// API URL with the city name and API key

const searchWeather = () => {
  fetch(url + "&q=" + cityInput.value)
    .then((responsive) => responsive.json())
    .then((data) => {
      console.log(data) // Log the data to the console for debugging
      if (data.cod == 200) {
        city.querySelector("figcaption").innerText = data.name // Display the city name
        city.querySelector("img").src =
          "https://flagsapi.com/" + data.sys.country + "/flat/64.png" // Display the city name
        temperature.querySelector("img").src =
          "https://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png"
        temperature.querySelector("figcaption span").innerText =
          data.main.temp.toFixed(1) // Display the temperature
        feelsLike.innerText =
          "Feels like " + data.main.feels_like.toFixed(1) + "°C" // Display the feels like temperature
        description.innerText = data.weather[0].description // Display the weather description
        clouds.innerText = data.clouds.all + "%" // Display the cloudiness
        humidity.innerText = data.main.humidity + "%" // Display the humidity
        wind.innerText = data.wind.speed + " m/s" // Display the wind speed
        pressure.innerText = data.main.pressure + " hPa" // Display the pressure
        visibility.innerText = data.visibility / 1000 + " km" // Display the visibility
        sunrise.innerText = new Date(data.sys.sunrise * 1000)
          .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
          .toString() // Display the sunrise time
        lastUpdated.innerText = new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }) // Display the last updated time
        errorMessage.style.display = "none" // Hide the error message
      } else {
        handleError() // Call the handleError function if the city is not found
      }
    })

  cityInput.value = "" // Clear the input field
}

const handleError = () => {
  gtag("event", "search_error", {
    event_category: "WeatherApp",
    event_label: cityInput.value.trim() || "empty_input",
  })

  errorMessage.style.display = "block" // Show the error message
  errorMessage.textContent = "City / Country not found" // Display the error message
}

const initApp = () => {
  cityInput.value = "hong kong" // Clear the input field
  searchWeather() // Call the searchWeather function to fetch the weather data
  todayDate.innerText = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }) // Display the current date
}

initApp() // Call the initApp function to initialize the app
