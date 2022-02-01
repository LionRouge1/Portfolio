const jtonav = document.getElementsByClassName('tonav')[0];
const menulist = document.querySelectorAll('.menu > li');
const togmenu = document.getElementsByClassName('menu')[0];

menulist.forEach((element) => {
  element.addEventListener('click', () => { togmenu.style.display = 'none'; });
});

function ftntonav() {
  if (togmenu.style.display === 'none') {
    togmenu.style.display = 'block';
    jtonav.style.color = 'white';
    jtonav.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    togmenu.style.display = 'none';
    jtonav.style.color = '#6070ff';
    jtonav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
  }
}

jtonav.addEventListener('click', ftntonav);
