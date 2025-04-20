# WeatherWise - A Weather Application

WeatherWise is a simple weather application that fetches real-time weather information from the OpenWeatherMap API and displays it in a user-friendly interface. The app also includes data analytics to track user interactions and performance metrics using Google Analytics.

---

## Features

- **Search Weather by City**: Enter a city name to get real-time weather data, including temperature, humidity, wind speed, and more.
- **Dynamic Weather Display**: Displays weather information with icons and detailed metrics.
- **Error Handling**: Provides user-friendly error messages for invalid or empty city inputs.
- **Refresh Feature**: Allows users to refresh the weather data for the last searched city after 3 minutes.
- **Analytics Integration**: Tracks user interactions (e.g., searches, page views) and app performance using Google Analytics.
- **Analytics Dashboard**: A separate dashboard to visualize key metrics like user interactions and app performance.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap API
- **Analytics**: Google Analytics
- **Visualization**: Grafana (optional for dashboard)

---

## How to Set Up and Run the Project

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Wizzz1/wizzz1.github.io.git
   cd wizzz1.github.io
   ```

2. **Run the Application**:

   - Open the `index.html` file in your browser to view the app.

3. **API Key**:
   - The OpenWeatherMap API key is hardcoded in the `app.js` file. You can replace it with your own API key by editing the following line in `app.js`:
     ```javascript
     let id = "your_openweathermap_api_key";
     ```

---

## How to Test the Project

**Search for a City**:

- Enter a city name in the input field and click the search button to fetch weather data.
- If the app is working correctly, it will display the weather information for the entered city, including temperature, humidity, wind speed, and more.
- If the app shows the hardcoded weather information (e.g., "Today Date ... Hong Kong 31°C ..."), it means the API request is not working as expected.

**Troubleshooting**:

- Open your browser's **DevTools** (press `F12` or `Ctrl+Shift+I`).
- Navigate to the **Console** tab to check for any error messages.
- Common issues include:
  - **Invalid API Key**: Ensure the API key in `app.js` is valid and active.
  - **Network Errors**: Check your internet connection or ensure the OpenWeatherMap API is accessible.
  - **Incorrect City Name**: Verify that the entered city name is valid and spelled correctly.

By using the Console, you can identify and resolve issues preventing the app from functioning properly.

---

## GitHub Repository

You can find the source code for this project on GitHub:  
[WeatherWise GitHub Repository](https://github.com/Wizzz1/wizzz1.github.io)

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
