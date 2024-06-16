<h1 align="center">
Weather App
</h1>
Welcome to Weather App, a React-based responsive web application that allows users to view the current weather conditions for multiple locations at the same time. Check the weather around you and all over the world at a glance. Rely on the accurate weather forecast and adjust your schedule to the weather coming in. You won’t even have to look out the window as the app will make you feel like you are already outside!Weather is sometimes difficult to predict. It uses the OpenWeather API to fetch real-time weather data. This accurate weather app allows to find out a detailed forecast wherever you are, for any time of the day by tapping on the icons:

- Location
- Current temperature
- Date and time
- Wind speed
- Pressure
- Humidity
- Visibility


## Sample Images

### Light Theme

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1718517633/Screenshot_99_nzbfmy.png" alt="light-theme">
</div>

### Dark Theme

<div style="text-align: center;">
     <img src="https://res.cloudinary.com/dsbxrn2tj/image/upload/v1718517768/Screenshot_100_xmezqm.png" alt="light-theme">
</div>
<br/>

### Installation

- Clone the repo
  ```
  git clone https://github.com/sulemanshaik109/Weather-App.git
  ```
- Install Dependencies
  ```
  npm install
  ```
- Run the app
  ```
  npm start
  ```
- Navigate to `http://localhost:3000` to view the application in the browser.

### Features

- **SearchBar**: Enter a location in the SearchBar and click search icon or press Enter to display the weather information of that loaction.
- **Local Storage**: Local storage is used to store the added locations, even after closing or refreshing the browser the app will remember the data.
- **Dark Mode Toggle**: Dark mode and light mode toggle functionality is implemented by clicking the icon.
- **Delete Button**: When Delete Icon is clicked, that location will be removed from the local storage.

### Usage

To use the Weather App:

- Enter the location in the search bar and click search icon or press Enter.
- View the weather data displayed for each added location.
- The app will remember your added locations even after closing or refreshing the browser thanks to local storage.
- Use Theme Icons to toggle dark mode and light mode.

### Technology Used

I have built this project using the following tools & techniques:

- React.JS
- JSX
- Functional Components
- React Hooks
- useState
- useEffect
- Search Bar
- Local Storage
- Reat Loader Spinner
- React Icons
- OpenWeather API
- Github Actions.

### Resources

<details>
<summary>OpenWeather API</summary>
<br/>

API Key: **099d738f470c32be8173e609ae9ed4ca**

**API Url**

```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```
</details>

<details>
<summary>Colors</summary>
<br/>

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: white">Hex: #ffffff</div>
<div style="background-color: #000000; width: 150px; padding: 10px; color: white">Hex: #000000</div>
<div style="background-color: #565656; width: 150px; padding: 10px; color: white">Hex: #565656</div>
<div style="background-color: #bff0ea; width: 150px; padding: 10px; color: black">Hex: #bff0ea</div>
<div style="background-color: #1b1a1a; width: 150px; padding: 10px; color: black">Hex: #1b1a1a</div>
<div style="background-color: #3b3b3b; width: 150px; padding: 10px; color: black">Hex: #3b3b3b</div>

</details>

# Show Your Support

Give a ⭐️ if you like this project!
