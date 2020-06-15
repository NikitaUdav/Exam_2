"use strict";
import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 0,
  gap: 30,
  animationDuration: 5000,
};
const config2 = {
  type: "carousel",
  startAt: 0,
  gap: 30,
  animationDuration: 5000,
  autoplay: 5000,
  hoverpause: true,
};
new Glide(".glide", config).mount();
new Glide(".glide2", config2).mount();
var mymap = L.map("mapid").setView([40.6512, -73.8504], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoicnVkb2xmdG9sc2tpeSIsImEiOiJja2JnOHJ6OG4xMzRqMzBwOGhsa3B0bmw3In0.8itngzwV6L7DW9jnFYpqQw",
  }
).addTo(mymap);
var marker = L.marker([40.6712, -73.8504]).addTo(mymap);
