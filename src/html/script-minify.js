function afficherMenuBurger() {
  var e = document.getElementById("myLinks");
  "block" === e.style.display
    ? (e.style.display = "none")
    : (e.style.display = "block");
}
