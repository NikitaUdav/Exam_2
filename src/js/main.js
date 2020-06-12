"use strict";
import Glide from "@glidejs/glide";
const config = {
  type: "carousel",
  startAt: 0,
  gap: 30,
  animationDuration: 500,
};
new Glide(".glide", config).mount();
new Glide(".glide2", config).mount();
