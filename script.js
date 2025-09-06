const geo_url = "https://geocode.maps.co/search?q=";
const geo_api = "68bbaf6ab70aa282983430lqi86059b";

async function geolocation(city) {
    const response = await fetch(geo_url + `${city}` + `&api_key=${geo_api}`);
    var data = await response.json();
    var lat = data[0].lat;
    var lon = data[0].lon;
    document.querySelector(".lat").innerHTML = `Latitutde : ${data[0].lat}`;
      document.querySelector(".lon").innerHTML = `Longitude : ${data[0].lon}`;
    document.querySelector(".geo-tag").innerHTML = `${data[0].lat} , ${data[0].lon}`;
    getWeather(lat, lon);
}





async function getWeather(lat, lon) {
    api_key = "e1cab5913cab112c731b8e0e66d85e43";
    api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

    const response = await fetch(api_url);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    if (data.name === '') {
        document.querySelector(".city").innerHTML = document.querySelector(".search input").value;
    }

    document.querySelector(".temp").innerHTML = data.main.temp + " °C";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + " metre/sec";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    console.log(data);
    console.log("city: " + data.name);
    console.log("temperature : " + data.main.temp + " °C");

    const icon = document.querySelector(".weather-img");
    if (data.weather[0].main === "Clouds") {
        icon.src = "images/Clouds.png";
    } else if (data.weather[0].main === "Clear") {
        icon.src = "images/clear.png";
    }

}


const searchbtn = document.querySelector(".search button");

searchbtn.addEventListener("click", () => {
    const input = document.querySelector(".search input").value;
        geolocation(input);
  

})



