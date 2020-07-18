import React, { Fragment } from 'react';
import './index.scss';

let timer = null;

export default class Toast extends React.Component {
  static show(masg, timeout = 1000) {
    this.init();
    this.setTimeout(timeout);
    const el = document.getElementById('box');
    el.innerText = masg;
  }

  static init() {
    clearTimeout(timer);
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
    timer = setTimeout(() => {
      const el = document.getElementById('box');
      el.style.display = 'none';
    }, timeout);
  };
}
