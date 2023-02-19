// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const city = document.querySelector('.city');
const city_temp = document.querySelector('.temperature');
const cards = document.getElementById('forecastContainer');
const theDate = document.querySelector('.current-date');
const the_wind = document.querySelector('.theWind');
const the_humidity = document.querySelector('.theHud');
var city_name = ""
var day_icon = document.getElementById('#mainEmoji')



const cardDate1 = document.getElementById('card1')
const cardDate2 = document.getElementById('card2')
const cardDate3 = document.getElementById('card3')
const cardDate4 = document.getElementById('card4')
const cardDate5 = document.getElementById('card5')







let today = new Date();

let month = today.getMonth() + 1;
let year = today.getFullYear();
let date = today.getDate();

let current_date = `${month}/${date}/${year}`;


var myApi = "036d5581dff1701982052a13de844a4f"
var urlQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myApi + "&units=" + "imperial"


fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=036d5581dff1701982052a13de844a4f")
    .then(response => response.json())
    .then(data => {
        console.log(data);

    });
document.getElementById('thisBtn').addEventListener('click', function (event) {
    event.preventDefault()
     city_name = document.getElementById('city_input').value
    console.log("City", city_name)
    cards.style.opacity = "1";
    // localStorage.setItem('city_input', JSON.stringify(city_name))
    // if (localStorage.getItem("city_input") === null) {
    //     localStorage.setItem("city_input", JSON.stringify([]));
    // }
    var storedCities = JSON.parse(localStorage.getItem("city_input")) || [];
    if (!storedCities.includes(city_name)) {
        storedCities.push(city_name);
        localStorage.setItem('city_input', JSON.stringify(storedCities))

        fetchWeather();
    }

 

    // city data fetch logs data and displays the information to the content area
function fetchWeather(city_name){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=036d5581dff1701982052a13de844a4f` + "&units=" + "imperial")
        .then(response => response.json())
        .then(data => {
            console.log(data, "api");
            console.log(data.weather[0].description);
            city.textContent = data.name;
            city_temp.textContent = ` ${data.main.temp}  °F`;
            const date = new Date(data.dt * 1000);
            var icon = data.weather[0].icon;
            console.log(icon)
            $("#mainEmoji").attr('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);

            theDate.textContent = `${date.toLocaleDateString("en-US", {
                month: "2-digit",
                day: "2-digit",
                year: "numeric"
            })}`;



            the_wind.textContent = `Wind: ${data.wind.speed} MPH` // using template literals 
            the_humidity.textContent = `Humidity: ${data.main.humidity} %`


            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            var fiveDay = "https://api.openweathermap.org/data/2.5/forecast?" + "lat=" + lat + "&lon=" + lon + "&appid=" + myApi + "&units=" + "imperial";

            return fetch(fiveDay).then(res => {
                return res.json()
            })

                .then(data => {
                    console.log(data);
                    let date1 = new Date(data.list[4].dt_txt);
                    let temp_1 = document.getElementById('temp1')
                    let wind_1 = document.getElementById('wind1')
                    let emoji_1 = document.getElementById('emoji1')
                    emoji_1 = `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`
                    $("#icon1").attr("src", `http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}.png`)
                    cardDate1.textContent = date1.toLocaleDateString();
                    temp_1.textContent = `Temp: ${data.list[4].main.temp} °F `
                    wind_1.textContent = `Wind: ${data.list[4].wind.speed} MPH `



                    let date2 = new Date(data.list[8].dt_txt);
                    let temp_2 = document.getElementById('temp2')
                    let wind_2 = document.getElementById('wind2')
                    let emoji_2 = document.getElementById('emoji2')
                    emoji_2 = `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`
                    $("#icon2").attr("src", `http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}.png`)
                    cardDate2.textContent = date2.toLocaleDateString();
                    temp_2.textContent = `Temp: ${data.list[8].main.temp} °F `
                    wind_2.textContent = `Wind: ${data.list[8].wind.speed} MPH `

                    let date3 = new Date(data.list[16].dt_txt);
                    let temp_3 = document.getElementById('temp3')
                    let wind_3 = document.getElementById('wind3')
                    let emoji_3 = document.getElementById('emoji3')
                    emoji_3 = `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`
                    $("#icon3").attr("src", `http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}.png`)
                    cardDate3.textContent = date3.toLocaleDateString();
                    temp_3.textContent = `Temp: ${data.list[16].main.temp} °F `
                    wind_3.textContent = `Wind: ${data.list[16].wind.speed} MPH `

                    let date4 = new Date(data.list[24].dt_txt);
                    let temp_4 = document.getElementById('temp4')
                    let wind_4 = document.getElementById('wind4')
                    let emoji_4 = document.getElementById('emoji4')
                    emoji_4 = `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`
                    $("#icon4").attr("src", `http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}.png`)
                    cardDate4.textContent = date4.toLocaleDateString();
                    temp_4.textContent = `Temp: ${data.list[24].main.temp} °F `
                    wind_4.textContent = `Wind: ${data.list[24].wind.speed} MPH `

                    let date5 = new Date(data.list[32].dt_txt);
                    let temp_5 = document.getElementById('temp5')
                    let wind_5 = document.getElementById('wind5')
                    let emoji_5 = document.getElementById('emoji5')
                    emoji_5 = `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`
                    $("#icon5").attr("src", `http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}.png`)
                    cardDate5.textContent = date5.toLocaleDateString();
                    temp_5.textContent = `Temp: ${data.list[32].main.temp} °F `
                    wind_5.textContent = `Wind: ${data.list[32].wind.speed} MPH `


                })






        });
    }





})
const displayRecent = () => {
    const recentCities = JSON.parse(localStorage.getItem("city_input"));
    const cityContainer = document.getElementById('cityList');
    cityContainer.innerHTML = ""
    for (const city of recentCities) {
        const newTag = document.createElement("a");
        newTag.classList.add("list-group-item", "list-group-item-action", "recentName" )
        newTag.textContent = city
        console.log(newTag)
        cityContainer.append(newTag);
        
    }
    // <a href="#" class="list-group-item list-group-item-action">A second link item</a>
 }
 document.body.addEventListener('click', function (event){
    event.preventDefault();
    if (event.target.classList.contains('recentName')){
        city_name = event.target.textContent
        console.log(city_name);
        // document.getElementById("thisBtn").addEventListener('click',)
        fetchWeather(event.target.textContent);
        
    }
 })

displayRecent();

