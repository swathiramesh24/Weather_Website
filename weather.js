const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get('city');
const apiKey = '95a03393661e7fac7552742420533329'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {

    if(data.cod!==200)
    {
      throw new Error("City not found!");
    }

    const temperature = data.main.temp;
    const cityName = data.name;
    const weatherCondition = data.weather[0].main;
    const weatherDesc = data.weather[0].description.toLowerCase();
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const maxTemp = data.main.temp_max;
    const minTemp = data.main.temp_min;

    document.querySelector('.weather-name').textContent = weatherCondition;
    document.querySelector('.temperature').textContent = `${temperature} °C`;
    document.querySelector('.city-name').textContent = cityName;
    document.querySelector('.weather').textContent = weatherCondition;
    document.querySelector('#temp').textContent = `Temperature :${temperature} °C`;
    document.querySelector('#sunrise').textContent = `Sunrise (IST) : ${sunrise}`;
    document.querySelector('#sunset').textContent = `Sunset (IST) : ${sunset}`;
    document.querySelector('#air-quality').textContent = `Atmospheric Pressure : ${data.main.pressure} hPa`;
    document.querySelector('#humidity').textContent = `Humidity : ${humidity}%`;
    document.querySelector('#wind').textContent = `Wind : ${windSpeed} m/s`;

    const taglines = {
      Clear: '"Bright skies and sunny vibes. Time to go out!"',
      Clouds: '"Soft skies and chill vibes. Maybe a good book?"',
      Rain: '"Rainy days ahead. Grab your umbrella!"',
      Snow: '"Winter wonderland! Stay warm!"',
      Thunderstorm: '"Thunderstorms expected. Stay safe!"',
      Mist: '"It\'s a bit foggy. Drive carefully!"',
      Haze: '"Hazy mood, maybe stay indoors!"',
      Fog: '"Visibility is low. Take care!"'
    };
    document.querySelector('#tag-line').textContent = taglines[weatherCondition] || 'Enjoy the weather!';


    const body = document.body;
    if (weatherDesc.includes("clear") || weatherDesc.includes("sun")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/sunny.png')";
    } else if (weatherDesc.includes("partly")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/partly_cloudy.png')";
    } else if (weatherDesc.includes("cloud")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/cloudy.png')";
    } else if (weatherDesc.includes("rain")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/rain_thunder.png')";
    } else if (weatherDesc.includes("thunderstorm")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/rain_thunder.png')";
    } else if (weatherDesc.includes("snow")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/snow.png')";
    } else if (weatherDesc.includes("mist") || weatherDesc.includes("fog") || weatherDesc.includes("haze")) {
      body.style.backgroundImage = "url('/Weather_Website/images/backgrounds/fog.png')";
    } else {
      body.style.backgroundImage = "url('images/backgrounds/default.jpg')";
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.transition = "background-image 0.5s ease-in-out";
  

  let iconPath = '';

  if (weatherDesc.includes("clear") || weatherDesc.includes("sun")) {
    iconPath = '/Weather_Website/images/icons/sunny_clear.png';
  } else if (weatherDesc.includes("partly")) {
    iconPath = '/Weather_Website/images/icons/partly_cloudy.png';
  } else if (weatherDesc.includes("cloud")) {
    iconPath = '/Weather_Website/images/icons/cloudy.png';
  } else if (weatherDesc.includes("rain")) {
    iconPath = '/Weather_Website/images/icons/rain.png';
  } else if (weatherDesc.includes("thunderstorm")) {
    iconPath = '/Weather_Website/images/icons/thunderstorm.png';
  } else if (weatherDesc.includes("snow")) {
    iconPath = '/Weather_Website/images/icons/snow.png';
  } else if (weatherDesc.includes("mist") || weatherDesc.includes("fog") || weatherDesc.includes("haze")) {
    iconPath = '/Weather_Website/images/icons/fog.png';
  } else {
    iconPath = '/Weather_Website/icons/default.png';
  }
  
  const weatherIcon = document.querySelector('#weather-icon');
    if (weatherIcon) {
      weatherIcon.src = iconPath;
    }
  })
  .catch(error => {
    console.error(error);
    alert("Something went wrong. Please try again.");
  });

  
  

  