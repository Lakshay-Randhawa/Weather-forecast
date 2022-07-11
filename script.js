const API_KEY = '51373948adcb795d6e1cf8d1dd961ed1'

window.onload = () =>{

    let location

    let getWeather = position =>{

        location = position

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${API_KEY}`)
        .then(data => data.json())
        .then(jsonData =>{
            console.log(jsonData)

        //    document.getElementById('text_location').innerHTML = jsonData.name
        //    document.getElementById('text_location_country').innerHTML = jsonData.sys.country
        //    document.getElementById('text_temp').innerHTML = Math.round(jsonData.min.temp)
        //    document.getElementById('text_feelslike').innerHTML = Math.round(jsonData.min.feels_like)
        //    document.getElementById('text_desc').innerHTML = jsonData.weather[0].description
        })
    }
    
    navigator.geolocation.getCurrentPosition(getWeather)
}
