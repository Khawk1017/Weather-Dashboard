// selecting all the elements within the html doc

const submitBtn = document.querySelector('button');
const weather_box = document.querySelector('.weather');
const cityInput = document.querySelector('.city');
const city_temp = document.querySelector('.temperature');
const cards = document.querySelector('allCards');

submitBtn.addEventListener('click', function() {
  const city = cityInput.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=036d5581dff1701982052a13de844a4f`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Use the data to update the weather information
    });
});
