const hamburger = document.querySelector(".hamburger");

const navlinks = document.querySelector(".navlinks");

const navlinksStyle = navlinks.classList;

window.addEventListener("load", () => {
  if (window.innerWidth < "737") {
    navlinksStyle.add("hidden");
  }
  if (window.innerWidth > "737") {
    navlinksStyle.remove("hidden");
  }
});

hamburger.addEventListener("click", () => {
  const logoStyle = document.querySelector(".logo").classList;
  if (navlinksStyle.contains("hidden")) {
    navlinksStyle.remove("hidden");
    navlinksStyle.add("block");
    logoStyle.add("forwards");
  } else {
    navlinksStyle.remove("block");
    navlinksStyle.add("hidden");
    logoStyle.remove("forwards");
  }
});
