'use strict';

function onChange(event) {
  console.log(this.value);
}

function debounce(f, delay) {
  let timer;
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => f.call(this, event), delay);
  }
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
