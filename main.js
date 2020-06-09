function onChange(event) {
  console.log(event.target.value)
}

function debounce(f, delay) {
  // ...
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
