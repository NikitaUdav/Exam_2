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
