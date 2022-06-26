let weather = {
    "apiKey": "API KEY",
    fetchWeather: function () {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Detroit&units=metric&appid=${this.apiKey}`
            ).then((response) => response.json())
            .then((data) => console.log(data));
    }
};
