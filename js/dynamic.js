const humburgerNav = document.getElementsByClassName("tonav")[0];
const menulist = document.querySelectorAll("nav > ul > li");
const menu = document.querySelector('nav > ul');
const btnproject = document.querySelectorAll('.btn');
const closepopup = document.querySelectorAll('.popuptitle > i');


menulist.forEach((element) => {
  element.addEventListener("click", () => {
    menu.style.display = "none";
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
    menu.classList.toggle('menu');
  });
});

function displayNav() {
  if (menu.style.display == 'block'){
    menu.style.display = 'none';
    humburgerNav.style.color = "#6070ff";
    humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  } else {
    menu.style.display = 'block';
    humburgerNav.style.color = "white";
    humburgerNav.innerHTML = '<i class="fas fa-times"></i>';
  }

  menu.classList.toggle('menu');
}

humburgerNav.addEventListener("click", displayNav);


// Detail popup windows 
btnproject.forEach(element => {
  element.addEventListener("click", () => {
    const popup = element.nextElementSibling;
    popup.style.display = 'block';
  })
});

console.log(closepopup);
closepopup.forEach(element => {
  element.addEventListener("click", () => {
    const popup = element.parentElement.parentElement.parentElement;
    popup.style.display = 'none';
    console.log(element.parentElement.parentElement.parentElement);
  })
});