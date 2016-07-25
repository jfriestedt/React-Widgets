const React = require('react');
const ReactDOM = require('react-dom');

const Weather = React.createClass({
  getInitialState() {
    return { time: new Date(), weather: {weather: [{description: 'loading'}], main: {temp: 'loading'}} };
  },

  componentDidMount() {
    this.geo = navigator.geolocation.getCurrentPosition(this.handleLocation); // NB find current position navigator.geoposition
    this.interval = setInterval(this.tick, 1000);
  },

  tick() {
    // debugger
    // this.setState({time: (this.state.time.getSeconds() + 1)});

    // this.state.time.setSeconds(this.state.time.getSeconds() + 1);
    this.setState({time: new Date(this.state.time.getTime() + 1000) });
  },

  handleLocation (pos) {
    const crd = pos.coords;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=imperial&appid=645c5d39c7603f17e23fcaffcea1a3c1`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    // debugger

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        // debugger
        this.state.weather = JSON.parse(request.responseText);
        console.log("success");
        // debugger
      } else {
        // Failure!
        console.log("failure");
      }
    }.bind(this);
    request.onerror = function () {
      // Error.
    };

    request.send();

    // return new XMLHttpRequest(http://api.openweathermap.org/data/2.5/weather?lat={crd.latitude}&lon={crd.longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return(
      <div className="weatherclock">
        <div className="clock">
          <h1>Time: {this.state.time.toLocaleTimeString()}</h1>
          <h1>Date: {this.state.time.toDateString()}</h1>
        </div>
        <div className="weather">
          <h1>Weather: {this.state.weather.weather[0].description}</h1>
          <h1>Temp: {this.state.weather.main.temp}</h1>
        </div>
      </div>

    );
  }

});

module.exports = Weather;
