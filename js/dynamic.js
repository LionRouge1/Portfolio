const humburgerNav = document.getElementsByClassName("tonav")[0];
const menulist = document.querySelectorAll(".menu > li");
const togmenu = document.getElementsByClassName("menu")[0];
togmenu.style.display = "none";

menulist.forEach((element) => {
  element.addEventListener("click", () => {
    togmenu.style.display = "none";
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  });
});

function displayNav() {
  if (togmenu.style.display === "none") {
    togmenu.style.display = "block";
    humburgerNav.style.color = "white";
    humburgerNav.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    togmenu.style.display = "none";
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  }
}

humburgerNav.addEventListener("click", displayNav);
