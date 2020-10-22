window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("slide").style.backgroundColor = "#2E8BC0";
    document.getElementById("slide").style.opacity = "1";
  } else {
    document.getElementById("slide").style.backgroundColor = "";
    document.getElementById("slide").style.opacity = "";
  }
}
