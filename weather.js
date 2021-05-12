class Weather {
  constructor(city, state) {
    this.apiKey = " ";
    this.city = city;
    this.state = state;
  }
  //Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.......json`);

    const responseData = await response.json();
    return responseData.current_observation;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
