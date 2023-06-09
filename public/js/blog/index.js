var apis = [
  "WomenHealth",
  "SustainableMenstruation",
  "Gynaecology",
  "MenstrualHealth",
  "WomenHealth",
  "SustainableMenstruation",
];

var titles = Object.values(document.querySelectorAll(".card__title"));
var imgs = Object.values(document.querySelectorAll("image"));
var sources = Object.values(document.querySelectorAll(".meta__author"));
var contents = Object.values(document.querySelectorAll(".card__copy"));
let preloader = document.querySelector(".preloader")

window.addEventListener("load", async function () {
  for (var i = 0; i < titles.length; i++) {
    await fetch("http://127.0.0.1:4000/" + apis[i])
      .then((response) => response.json())
      .then((data) => {
        titles[i].textContent = data.title;
        imgs[i].href.baseVal = data.imglink;
        contents[i].textContent = data.Content;
        sources[i].innerHTML = data.source;
      });
  }
  document.querySelector(".container").classList.remove("hidden");
  preloader.style.display = "none"
});
