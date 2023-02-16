// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const city = document.querySelector('.city');
const city_temp = document.querySelector('.temperature');
const cards = document.querySelector('allCards');
const theDate = document.querySelector('.current-date');
const the_wind = document.querySelector('.theWind');
const the_humidity = document.querySelector('.theHud');

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
            // let emoji_1 = document.getElementById('emoji1')
            // emoji_1 = "http://openweathermap.org/img/wn/" + data.list[4].icon + ".png"
            cardDate1.textContent = date1.toLocaleDateString();
            temp_1.textContent = `Temp: ${data.list[4].main.temp} °F `
            wind_1.textContent = `Wind: ${data.list[4].wind.speed} MPH `
            $('emoji1').attr('src', `http://openweathermap.org/img/wn/  ${data.list[4].icon} ".png"`    )
            

            let date2 = new Date(data.list[8].dt_txt);
            let temp_2 = document.getElementById('temp2')
            let wind_2 =document.getElementById('wind2')
            cardDate2.textContent = date2.toLocaleDateString();
            temp_2.textContent = `Temp: ${data.list[8].main.temp} °F `
            wind_2.textContent = `Wind: ${data.list[8].wind.speed} MPH `

            let date3 = new Date(data.list[16].dt_txt);
            let temp_3 = document.getElementById('temp3')
            let wind_3 = document.getElementById('wind3')
            cardDate3.textContent = date3.toLocaleDateString();
            temp_3.textContent = `Temp: ${data.list[16].main.temp} °F `
            wind_3.textContent = `Wind: ${data.list[16].wind.speed} MPH `

            let date4 = new Date(data.list[24].dt_txt);
            let temp_4 = document.getElementById('temp4')
            let wind_4 = document.getElementById('wind4')
            cardDate4.textContent = date4.toLocaleDateString();
            temp_4.textContent = `Temp: ${data.list[24].main.temp} °F `
            wind_4.textContent = `Wind: ${data.list[24].wind.speed} MPH `

            let date5 = new Date(data.list[32].dt_txt);
            let temp_5 = document.getElementById('temp5')
            let wind_5 = document.getElementById('wind5')
            cardDate5.textContent = date5.toLocaleDateString();
            temp_5.textContent = `Temp: ${data.list[32].main.temp} °F `
            wind_5.textContent = `Wind: ${data.list[32].wind.speed} MPH `

            
        })
        
         
        
        
        

    });
    
})


    


// need to hide 5 day and show when the button is clicked 
// need to figure out how to add weather icon images to the cards
// need to figure how set local storage for the data / implent with the event listener