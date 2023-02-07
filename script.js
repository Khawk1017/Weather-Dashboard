// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const city = document.getElementById('city');
const city_temp = document.getElementById('temperature');
const cards = document.querySelector('allCards');

fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=036d5581dff1701982052a13de844a4f")
    .then(response => response.json())
    .then(data => {
        console.log(data);

    });
document.getElementById('thisBtn').addEventListener('click', function (event) {
    event.preventDefault()
    var city_name = document.getElementById('city_input').value
    console.log("City", city_name)
    getForcasts(city_name)
})

function getForcasts(city_name) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=036d5581dff1701982052a13de844a4f`)
        .then(response => response.json())
        .then(data => {
            console.log(data, "api");

        });
}
