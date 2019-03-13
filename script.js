function responsiveNav() {
    var x = document.getElementById("responsive-navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }