// ACTION BTN ANIMATION

setInterval(function () {
  document
    .querySelectorAll(".action")
    .forEach((el) => el.classList.add("animate__animated"));
  document
    .querySelectorAll(".action")
    .forEach((el) => el.classList.add("animate__heartBeat"));
}, 2500);

setInterval(function () {
  document
    .querySelectorAll(".action")
    .forEach((el) => el.classList.remove("animate__animated"));
  document
    .querySelectorAll(".action")
    .forEach((el) => el.classList.remove("animate__heartBeat"));
}, 3500);
