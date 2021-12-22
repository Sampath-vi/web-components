import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Counter from './counter';

export default class WebCounter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
     ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <Counter />,
      document.getElementById('root')
    );
  }
}

customElements.define('web-counter', WebCounter);

