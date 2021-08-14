let weatherAPI = "eca730a1df1ecf4d3f885750343bb8b0";
let weatherBaseEndpoint =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" +
  weatherAPI;

let getCityByName = async (city) => {
  let endpoint = weatherBaseEndpoint + "&q=" + city;

  let res = await fetch(endpoint);

  let weatherData = await res.json();
  console.log(weatherData);
};

getCityByName("New York");
