const React = require('react');
const ReactDOM = require('react-dom');

const Tabs = React.createClass({
  getInitialState() {
    return {selected: 0};
  },
  click(event) {
    event.preventDefault();
    // debugger
    this.setState({selected: parseInt(event.currentTarget.dataset.id)});
  },
  render() {
    // debugger
    return (
      <div className="tabs">

        <ul>
          {
            this.props.tabs.map( function(tab, index) {
              return (
                <h1 onClick={this.click} data-id={ index } key={ index }
                  className={this.state.selected === index ? 'selected' : ''}>
                  { tab.title }
                </h1>
              );
            }.bind(this))
          }
        </ul>

        <article>{this.props.tabs[this.state.selected].content}</article>

      </div>
    );
  }
});
// <h1 onClick={this.click} id="0">{this.state.tabs[0].title}</h1>
// <h1 onClick={this.click} id="1">{this.state.tabs[1].title}</h1>
// <h1 onClick={this.click} id="2">{this.state.tabs[2].title}</h1>

module.exports = Tabs;

// <div class="tabs-header"></div>
// <div class="tabs-article"></div>

// <Header />

// <Content />
// TODO set up react objects for Header & Content

// <ul>
//   {
//     items.map( item => <li key={ item.id }>{ item.name }</li>;
//     })
//   }
// </ul>
