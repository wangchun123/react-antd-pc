import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import './index.scss';

let timer = null;

export default class Toast extends React.Component {
  static show(masg, timeout = 1000) {
    this.init();
    this.setTimeout(timeout);
    ReactDom.render(
      <Fragment>{masg}</Fragment>,
      document.getElementById('box'),
    );
  }

  static init() {
    const el = document.getElementById('box');
    if (el) {
      el.style.display = 'block';
    } else {
      const dvi = document.createElement('div');
      dvi.id = 'box';
      document.body.appendChild(dvi);
    }
  }

  static setTimeout = (timeout) => {
    clearTimeout(timer);
    setTimeout(() => {
      const el = document.getElementById('box');
      el.style.display = 'none';
    }, timeout);
  };
}
