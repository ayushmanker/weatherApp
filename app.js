//Init storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//init ui
const ui = new UI();
//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
//DOMContentLoaded is the event it is called when the DOM is loaded. means the initial step of the webpage starting;

//Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("click").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);

  //Set location in LS
  storage.setLocationData(city, state);

  //Get and display weather
  getWeather();

  //Close modal
  $("#locModal").modal("hide");
  //this is the only place where we use jquery and it is req here bcs the modal we are using is on bootstrap that uses jquery and what it is doing that it removes the pop-up and changes the location to the filled one
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      // console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
