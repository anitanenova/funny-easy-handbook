// Start translate examples js
const translateButton = document.querySelector(".translate-button");
const translateXButton = document.querySelector(".translate-x-button");
const translateYButton = document.querySelector(".translate-y-button");

translateButton.addEventListener("click", function () {
  trigger(".translated-box", translateButton, "translate", "translate");
});

translateXButton.addEventListener("click", function () {
  trigger(".translated-x-box", translateXButton, "translate-x", "translate X");
});

translateYButton.addEventListener("click", function () {
  trigger(".translated-y-box", translateYButton, "translate-y", "translate Y");
});

// End translate examples js

// Start scale examples js
const scaleButton = document.querySelector(".scale-button");
const scaleXButton = document.querySelector(".scale-x-button");
const scaleYButton = document.querySelector(".scale-y-button");

scaleButton.addEventListener("click", function () {
  trigger(".scaled-box", scaleButton, "scale", "scale");
});

scaleXButton.addEventListener("click", function () {
  trigger(".scaled-x-box", scaleXButton, "scale-x", "scale X");
});

scaleYButton.addEventListener("click", function () {
  trigger(".scaled-y-box", scaleYButton, "scale-y", "scale Y");
});

// End scale examples js

// Start rotate examples js
const rotateRightButton = document.querySelector(".rotate-right-button");
const rotateLeftButton = document.querySelector(".rotate-left-button");
const rotateHalfButton = document.querySelector(".rotate-half-button");

rotateRightButton.addEventListener("click", function () {
  trigger(".rotated-right-box", rotateRightButton, "rotate-right", "rotate");
});

rotateLeftButton.addEventListener("click", function () {
  trigger(".rotated-left-box", rotateLeftButton, "rotate-left", "rotate");
});

rotateHalfButton.addEventListener("click", function () {
  trigger(".rotated-half-box", rotateHalfButton, "rotate-half", "rotate");
});
// End rotate examples js

// Start skew examples js
const skewButton = document.querySelector(".skew-button");
const skewXButton = document.querySelector(".skew-x-button");
const skewYButton = document.querySelector(".skew-y-button");

skewButton.addEventListener("click", function () {
  trigger(".skewed-box", skewButton, "skew", "skew");
});

skewXButton.addEventListener("click", function () {
  trigger(".skewed-x-box", skewXButton, "skew-x", "skew X");
});

skewYButton.addEventListener("click", function () {
  trigger(".skewed-y-box", skewYButton, "skew-y", "skew Y");
});

// End skew examples js

// trigger function
function trigger(triggeredEl, triggerButton, className, action) {
  const triggeredElement = document.querySelector(triggeredEl);
  if (triggeredElement.classList.contains(className)) {
    triggeredElement.classList.remove(className);
    triggerButton.textContent = `Let's ${action} it`;
  } else {
    triggeredElement.classList.add(className);
    triggerButton.textContent = "Reset";
  }
}
