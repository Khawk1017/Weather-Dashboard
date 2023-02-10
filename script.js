// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const city = document.querySelector('.city');
const city_temp = document.querySelector('.temperature');
const cards = document.querySelector('allCards');
const theDate = document.querySelector('.current-date');
const the_wind = document.querySelector('.theWind');
const the_humidity = document.querySelector('.theHud');

const cardDates = document.querySelector('.card-header')


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
         city_temp.textContent = ` ${data.main.temp}  °F`;
         const date = new Date(data.dt * 1000);
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
            let  = new Date(data.list[5].dt_txt);
            for (let i = 0; i < data.list.length; i += 8) {
                let date = new Date(data.list[i].dt_txt);
                let options = { year: 'numeric', month: 'short', day: 'numeric' };
                let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
            
                
                let forecastDate = document.createElement('p');
                forecastDate.textContent = formattedDate;
                cardDates.appendChild(forecastDate);
            }
            
              
            
        })
        
         
        
        
        

    });
    
})


    


