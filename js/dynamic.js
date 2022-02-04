const humburgerNav = document.getElementsByClassName("tonav")[0];
const menulist = document.querySelectorAll(".menu > li");
const togmenu = document.getElementsByClassName("menu")[0];

menulist.forEach((element) => {
  element.addEventListener("click", () => {
    togmenu.style.display = "none";
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  });
});

function displayNav() {
  const menu = document.querySelector("nav > ul");
  if (menu.style.display == "block") {
    menu.style.display = "none";
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  } else {
    menu.style.display = "block";
    humburgerNav.style.color = "white";
    humburgerNav.innerHTML = '<i class="fas fa-times"></i>';
  }

  menu.classList.toggle("menu");
}

humburgerNav.addEventListener("click", displayNav);

//data storage in the browser
const names = document.getElementById("name").value;
const email = document.getElementById("mail").value;
const mess = document.getElementById("message").value;
const btn = document.getElementById("submitBtn").value;

const User = {
  name: names,
  mail: email,
  message: mess,
};

btn.addEventListener("click", processData);
function processData() {}
