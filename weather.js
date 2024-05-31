let input = document.querySelector("input");
let btn = document.querySelector("button");
let cityName = document.querySelectorAll("h4")[0];
let temperature = document.querySelectorAll("h4")[1];
let windSpeed = document.querySelectorAll("h4")[2];
let humidity = document.querySelectorAll("h4")[3];
let climate = document.querySelectorAll("h4")[4];

btn.addEventListener("click",async ()=>{
    let apiKey = `84b2ba586e72e75238604e5d44bb7ba0`;
    let dataFromServer = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`
    );
    let jsonData = await dataFromServer.json();
    console.log(dataFromServer);
    console.log(jsonData);
    cityName.innerHTML = `City Name : ${jsonData.name}`;
    temperature.innerHTML = `Temperature : ${(jsonData.main.temp -273).toFixed(2)}°c`;
    windSpeed.innerHTML = `Wind Speed : ${jsonData.wind.speed}`;
    humidity.innerHTML = `Humidity : ${jsonData.main.humidity}`;
    climate.innerHTML = `Climate : ${jsonData.weather[0].main}`;
    
});