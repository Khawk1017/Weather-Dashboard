// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const city = document.querySelector('.city');
const city_temp = document.querySelector('.temperature');
const cards = document.querySelector('allCards');
const theDate = document.querySelector('.current-date');
const the_wind = document.querySelector('.theWind');
const the_humidity = document.querySelector('.theHud');


let today = new Date();
    
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    let current_date =  `${month}/${date}/${year}`;
    

var myApi = "036d5581dff1701982052a13de844a4f"
var urlQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myApi + "&units=" + "imperial"


fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=036d5581dff1701982052a13de844a4f")
    .then(response => response.json())
    .then(data => {
        console.log(data);

    });
document.getElementById('thisBtn').addEventListener('click', function (event) {
    event.preventDefault()
    var city_name = document.getElementById('city_input').value
    console.log("City", city_name)
    
// city data fetch logs data and displays the information to the content area

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=036d5581dff1701982052a13de844a4f`+ "&units=" + "imperial")
    .then(response => response.json())
    .then(data => {
        console.log(data, "api");
        console.log(data.weather[0].description);
         city.textContent= data.name;
         city_temp.textContent = data.main.temp + "°F";
        theDate.textContent = current_date;

      the_wind.textContent = data.wind.speed + " MPH"
        the_humidity.textContent = data.main.humidity
        
        

        //city_temp.text(data.main)
        
        

    });
    
})


    


