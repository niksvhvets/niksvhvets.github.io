var link = document.querySelector(".button-search-hotels");
var popup = document.querySelector(".search-hotels-wrapper");
popup.style.display = 'none';

var form = document.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");

link.addEventListener("click", function(event) { 
  event.preventDefault(); 
  popup.classList.toggle("search-hotels-wrapper-show");
  popup.style.display = 'block';
  arrival.focus();
});

form.addEventListener("submit", function (event) {
 if (!arrival.value && !departure.value) {
  event.preventDefault();
  console.log("Нужно ввести дату заезда и выезда!");
  popup.classList.toggle("search-hotels-wrapper-error");
  arrival.focus();
} else if (!arrival.value) {     
  event.preventDefault();
  console.log("Нужно ввести дату заезда!");
  popup.classList.toggle("search-hotels-wrapper-error");
  arrival.focus();
} else if (!departure.value) {     
  event.preventDefault();
  console.log("Нужно ввести дату выезда!");
  popup.classList.toggle("search-hotels-wrapper-error");
  departure.focus();
} 
});

window.addEventListener("keydown", function(event) {
 if ( event.keyCode === 27) {
  event.preventDefault();
  if (popup.classList.contains("search-hotels-wrapper-show")) {
   popup.classList.toggle("search-hotels-wrapper-show");
 }
}
});