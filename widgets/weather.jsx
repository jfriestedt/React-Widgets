const React = require('react');
const ReactDOM = require('react-dom');

const Weather = React.createClass({
  getInitialState() {
    return { time: new Date() };
  },

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    this.geo = navigator.geolocation.getCurrentLocation(this.handleLocation); // NB find current position navigator.geoposition
  },

  tick() {
    // debugger
    // this.setState({time: (this.state.time.getSeconds() + 1)});

    // this.state.time.setSeconds(this.state.time.getSeconds() + 1);
    this.setState({time: new Date(this.state.time.getTime() + 1000) });
  },

  handleLocation (pos) {
    const crd = pos.coords;
    let url = "http://api.openweathermap.org/data/2.5/weather?lat={crd.latitude}&lon={crd.longitude}&appid=645c5d39c7603f17e23fcaffcea1a3c1";
    let request = new XMLHttpRequest();
    request.open('GET', {url}, true);
    let resp;

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        resp = request.responseText;
      } else {
        // Failure!
        resp = undefined;
      }
    };

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
      <div className="clock">
        <h1>Time: {this.state.time.toLocaleTimeString()}</h1>
        <h1>Date: {this.state.time.toDateString()}</h1>
      </div>

    );
  }

});

module.exports = Weather;
