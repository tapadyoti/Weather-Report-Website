const fetchData = async (city) => {
  cityName.innerText = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68cbcdae4amsh7558297fbd9733bp1763a0jsn727cc3990cda",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    // cloud_pct.innerText = result.cloud_pct
    temp.innerText = result.temp;
    feels_like.innerText = result.feels_like;
    humidity.innerText = result.humidity;
    min_temp.innerText = result.min_temp;
    max_temp.innerText = result.max_temp;
    wind_speed.innerText = result.wind_speed;
    wind_degrees.innerText = result.wind_degrees;
    sunrise.innerText = result.sunrise;
    sunset.innerText = result.sunset;
  } catch (error) {
    console.error(error);
  }
};

// default weather
fetchData("Guwahati");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData(city.value);
});

// weather for kolkata
const KolkataData = async (city) => {
  kolkata.innerText = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68cbcdae4amsh7558297fbd9733bp1763a0jsn727cc3990cda",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct.innerText = result.cloud_pct;
    temp1.innerText = result.temp;
    feels_like1.innerText = result.feels_like;
    humidity1.innerText = result.humidity;
    min_temp1.innerText = result.min_temp;
    max_temp1.innerText = result.max_temp;
    wind_speed1.innerText = result.wind_speed;
    wind_degrees1.innerText = result.wind_degrees;
    sunrise1.innerText = result.sunrise;
    sunset1.innerText = result.sunset;
  } catch (error) {
    console.error(error);
  }
};
KolkataData("Kolkata");

// weather for bangalore

const bangaloreData = async (city) => {
  bangalore.innerText = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68cbcdae4amsh7558297fbd9733bp1763a0jsn727cc3990cda",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct2.innerText = result.cloud_pct;
    temp2.innerText = result.temp;
    feels_like2.innerText = result.feels_like;
    humidity2.innerText = result.humidity;
    min_temp2.innerText = result.min_temp;
    max_temp2.innerText = result.max_temp;
    wind_speed2.innerText = result.wind_speed;
    wind_degrees2.innerText = result.wind_degrees;
    sunrise2.innerText = result.sunrise;
    sunset2.innerText = result.sunset;
  } catch (error) {
    console.error(error);
  }
};
bangaloreData("Bangalore");

// weather for Kerala

const KeralaData = async (city) => {
  kerala.innerText = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68cbcdae4amsh7558297fbd9733bp1763a0jsn727cc3990cda",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct3.innerText = result.cloud_pct;
    temp3.innerText = result.temp;
    feels_like3.innerText = result.feels_like;
    humidity3.innerText = result.humidity;
    min_temp3.innerText = result.min_temp;
    max_temp3.innerText = result.max_temp;
    wind_speed3.innerText = result.wind_speed;
    wind_degrees3.innerText = result.wind_degrees;
    sunrise3.innerText = result.sunrise;
    sunset3.innerText = result.sunset;
  } catch (error) {
    console.error(error);
  }
};
KeralaData("Kerala");

// weather for haryana

const HaryanaData = async (city) => {
  haryana.innerText = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "68cbcdae4amsh7558297fbd9733bp1763a0jsn727cc3990cda",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cloud_pct4.innerText = result.cloud_pct;
    temp4.innerText = result.temp;
    feels_like4.innerText = result.feels_like;
    humidity4.innerText = result.humidity;
    min_temp4.innerText = result.min_temp;
    max_temp4.innerText = result.max_temp;
    wind_speed4.innerText = result.wind_speed;
    wind_degrees4.innerText = result.wind_degrees;
    sunrise4.innerText = result.sunrise;
    sunset4.innerText = result.sunset;
  } catch (error) {
    console.error(error);
  }
};
HaryanaData("Haryana");
