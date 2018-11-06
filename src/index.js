import 'bootstrap';

import _ from 'lodash';
import './js/scroll';
import './js/scrollreveal';
import './js/slickcaroulsel';
import './js/typewriter';

import './style.scss';

//import printMe from './print.js';

/*
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component()); */

if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  const hotEmitter = require("webpack/hot/emitter");
  const DEAD_CSS_TIMEOUT = 2000;

  hotEmitter.on("webpackHotUpdate", function(currentHash) {
      document.querySelectorAll("link[href][rel=stylesheet]").forEach((link) => {
          const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
          const newLink = link.cloneNode();
          newLink.href = nextStyleHref;

          link.parentNode.appendChild(newLink);
          setTimeout(() => {
              link.parentNode.removeChild(link);
          }, DEAD_CSS_TIMEOUT);
      });
  })
}