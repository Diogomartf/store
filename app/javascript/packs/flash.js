document.addEventListener("turbolinks:load", function () {
  let flash = document.getElementById("flash");

  if (flash) {
    this.timeout = setTimeout(() => flash.remove(), 6500);
  }
});
