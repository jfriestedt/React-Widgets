const React = require('react');
const ReactDOM = require('react-dom');
const Tabs = require('./tabs');
const Weather = require('./weather');

const Widgets = React.createClass({
  render() {
    return(
      <div>
        <Tabs tabs = {[
          {title: "Tab1", content: "Tab1 Content"},
          {title: "Tab2", content: "Tab2 Content"},
          {title: "Tab3", content: "Tab3 Content"}
        ]}/>
        <Weather />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
