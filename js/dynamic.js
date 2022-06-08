const [humburgerNav] = document.getElementsByClassName("tonav");
const menulist = document.querySelectorAll("nav > ul > li");
const menu = document.querySelector('nav > ul');

function displayNav() {
  if (menu.style.display == 'block') {
    menu.style.display = 'none';
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

if (window.innerWidth < 992) {
  menulist.forEach((element) => {
    element.addEventListener("click", () => {
      menu.style.display = "none";
      humburgerNav.style.color = "#6070ff";
      humburgerNav.innerHTML = '<i class="fa fa-bars" aria-hidden="true"></i>';
      menu.classList.toggle('menu');
    });
  });

}

//data storage in the browser

const [body] = document.getElementsByTagName('body');
const input = document.querySelectorAll('form input, form textarea');


function changed() {
  const names = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mess = document.getElementById("message").value;

  const User = {
    'name': names,
    'mail': email,
    'message': mess
  };

  let storeUser = JSON.stringify(User);
  localStorage.setItem('user', storeUser);
}

input.forEach(element => {
  element.addEventListener('change', changed)
});

function pageload() {
  if (localStorage.user !== undefined) {
    const textJ = localStorage.user;
    const objJ = JSON.parse(textJ);
    document.getElementById("name").value = objJ.name;
    document.getElementById("email").value = objJ.mail;
    document.getElementById("message").value = objJ.message;
  }
}

body.addEventListener('load', pageload);

// Detail popup windows 

const projects = [
  {
    'name': ['To do list', 'CANOPY', 'Front End Dev', '2022'],
    'description': '"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. Built with Html, CSS and JavaScript.',
    'featured_image': ['images/todolistMb.png', 'images/todolist.png'],
    'technologie': ['html', 'css', 'javaScript'],
    'link': ['https://lionrouge1.github.io/To_do_list/', 'https://github.com/LionRouge1/To_do_list']
  },
  {
    'name': ['Currency Rate', 'SELF-EMPLOYED', 'Full Stack Dev', '2022'],
    'description': ' CURRENCY RATE is web site that help:<br>- View foreign exchange rates and use currency exchange rate calculator for more than 150 foreign currencies.<br>- Calculate live currency and foreign exchange rates and  Currency Convertion.<br>- Convert between all major global currencies.',
    'featured_image': ['images/exchangeMb.png', 'images/exchange.png'],
    'technologie': ['html', 'css', 'React', 'Redux'],
    'link': ['https://currencyrates1.netlify.app/', 'https://github.com/LionRouge1/Currency_Exchange.git']
  },
  {
    'name': ['Facebook 360', 'FACEBOOK', 'Full Stack Dev', '2015'],
    'description': 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptates adipisci nobis. Adipisci blanditiis nesciunt hic modi quas quos recusandae cum ab officia iusto non ratione consequatur natus, illum assumenda.',
    'featured_image': ['images/Snapshoot2.png', 'images/Dtop_snapshoot.png'],
    'technologie': ['html', 'css', 'Ruby on rails', 'javaScript'],
    'link': ['https//link-to-live-version', 'https//link-to-source-version']
  },
  {
    'name': ['Uber Navigation', 'Uber', 'Lead Developer', '2018'],
    'description': 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptates adipisci nobis. Adipisci blanditiis nesciunt hic modi quas quos recusandae cum ab officia iusto non ratione consequatur natus, illum assumenda.',
    'featured_image': ['images/Snapshoot3.png', 'images/Dtop_snapshoot1.png'],
    'technologie': ['html', 'css', 'Ruby on rails', 'javaScript'],
    'link': ['https//link-to-live-version', 'https//link-to-source-version']
  }
]


function WindowPopup(project) {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const popupCont = document.createElement('div');
  popupCont.classList.add('popupCont');

  const popuptitle = document.createElement('div');
  popuptitle.classList.add('popuptitle');

  popup.appendChild(popupCont);
  popupCont.appendChild(popuptitle);

  const htitle = document.createElement('h2');//variable
  htitle.textContent = project.name[0]
  const popclose = document.createElement('i');
  popclose.setAttribute('class', 'fas fa-times');


  popuptitle.appendChild(htitle);
  popuptitle.appendChild(popclose);

  const frame = document.createElement('div');
  frame.classList.add('frame');
  popupCont.appendChild(frame);

  const subTitle = document.createElement('h3');//variable
  subTitle.textContent = project.name[1];
  frame.appendChild(subTitle);

  const dot = document.createElement('div');
  frame.appendChild(dot);

  const pSub = document.createElement('p');//variable
  pSub.textContent = project.name[2];
  frame.appendChild(pSub);

  const dot1 = document.createElement('div');
  frame.appendChild(dot1);

  const pYr = document.createElement('p');//variable
  pYr.textContent = project.name[3]
  frame.appendChild(pYr);

  const mobileImg = document.createElement('img');
  mobileImg.setAttribute('src', project.featured_image[0]);//variable
  mobileImg.setAttribute('alt', 'A facebook card for mobile');//variable
  mobileImg.classList.add('phone');
  popupCont.appendChild(mobileImg);

  const DestImg = document.createElement('img');
  DestImg.setAttribute('src', project.featured_image[1]);//variable
  DestImg.setAttribute('alt', 'A facebook card for mobile');//variable
  DestImg.classList.add('Dtops');
  popupCont.appendChild(DestImg);

  const popupBody = document.createElement('div');
  popupBody.classList.add('popupbody');
  popupCont.appendChild(popupBody);

  const text = document.createElement('p');//variable
  text.textContent = project.description;
  text.classList.add('text');
  popupBody.appendChild(text);

  const cardre = document.createElement('div');
  popupBody.appendChild(cardre);

  const lang = document.createElement('ul');//variable array

  for (let i = 0; i < project.technologie.length; i++) {
    const list = document.createElement('li');
    list.innerHTML = project.technologie[i];
    lang.appendChild(list);
    if (project.technologie[i] == 'Ruby on rails') {
      list.classList.add('ruby');
    }
  }

  lang.classList.add('lang');
  cardre.appendChild(lang);

  const btnbox = document.createElement('div');
  btnbox.classList.add('btnbox');
  cardre.appendChild(btnbox);

  const btnLive = document.createElement('a');
  btnLive.setAttribute('type', 'button');
  btnLive.setAttribute('target', '_blank');
  btnLive.href = project.link[0];
  btnLive.classList.add('btn');
  btnbox.appendChild(btnLive);
  btnLive.innerHTML = 'See live <i class="fas fa-external-link-alt"></i>';

  const btnSource = document.createElement('a');
  btnSource.setAttribute('tupe', 'button');
  btnSource.setAttribute('target', '_blank');
  btnSource.href = project.link[1];
  btnSource.classList.add('btn');
  btnbox.appendChild(btnSource);
  btnSource.innerHTML = 'See source <i class="fab fa-github"></i>';

  const pr = document.querySelector('.snap_container');
  const bt = pr.firstChild;
  pr.insertBefore(popup, bt);

  popclose.addEventListener('click', () => {
    pr.removeChild(popup);
  });
}

function makeList(arr) {
  let obList = ''
  for (let n = 0; n < arr.length; n++) {
    if (arr[n] == 'Ruby on rails') {
      obList += `<li class='ruby'>${arr[n]}</li>`;
    } else {
      obList += `<li>${arr[n]}</li>`;
    }
  }
  return obList;
}

for (let x = 0; x < projects.length; x++) {
  let ord = ((x + 1) % 2 == 0) ? 'ord1' : '';
  const cardArticle = `
<article>
          <div class="snapshoot ${ord}">
            <img
              class="phone"
              src="${projects[x].featured_image[0]}"
              alt="Project card(mobile version)"
            />
            <img
              class="Dtop"
              src="${projects[x].featured_image[1]}"
              alt="Project card(desktop version)"
            />
          </div>
          <div class="left_block">
            <h2>${projects[x].name[0]}</h2>
            <div class="frame">
              <h3>${projects[x].name[1]}</h3>
              <div></div>
              <p>${projects[x].name[2]}</p>
              <div></div>
              <p>${projects[x].name[3]}</p>
            </div>
            <p class="text">
            ${projects[x].description}
            </p>
            <ul class="lang">
              ${makeList(projects[x].technologie)}
            </ul>
            <button class="btn" type="button">See Project</button>
          </div>
        </article>
`
  const sectionCard = document.querySelector('.snap_container');
  sectionCard.insertAdjacentHTML('beforeend', cardArticle);

}

const pro = document.querySelectorAll('.left_block > .btn');
for (let i = 0; i < pro.length; i++) {
  pro[i].addEventListener('click', WindowPopup.bind(null, projects[i]), false);
}

// languages

const languages = [
  {
    name: 'JavaScript',
    image: 'images/js.png',
  },
  {
    name: 'HTML',
    image: 'images/html.png',
  },
  {
    name: 'CSS',
    image: 'images/css.png',
  },
  {
    name: 'PHP',
    image: 'images/php.png',
  },
  {
    name: 'Python',
    image: 'images/python.png',
  },
  {
    name: 'Ruby on rails',
    image: 'images/rubyRail.png',
  }
];

const langs = document.querySelector('.langs');

languages.forEach(({ name, image }) => {
  const lan = `
  <li class="lan">
    <img class="lan-image" src="${image}" alt="${name}" title="${name}"/>
    <p>${name}</p>
  </li>`;

  langs.insertAdjacentHTML('beforeend', lan);
});

// frameworks

const frameworks = [
  { name: 'React', image: 'images/react.png' },
  { name: 'Nodejs', image: 'images/nodejs.png' },
  { name: 'Bootstrap', image: 'images/bootstrap.png' },
  { name: 'Sass', image: 'images/sass.png' }
];

const frames = document.querySelector('.frames');

frameworks.forEach(({ name, image }) => {
  const fram = `
  <li class="fram">
    <img class="fram-image" src="${image}" alt="${name}" title="${name}"/>
  </li>`;

  frames.insertAdjacentHTML('beforeend', fram);
});

// skills
const webDev = document.querySelector('.web-dev');
const tools = document.querySelector('.tools');
const professional = document.querySelector('.professional');
const listSkill = (element, categorie) => {
  categorie.forEach((item) => {
    const skill = `
    <div class="skill">
      <span class="symbol"><div></div></span>
      <span class="text">${item}</span>
    </div>`;
    element.insertAdjacentHTML('beforeend', skill)
  })
}
const skills = {
  webDev: ['JavaScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Python', 'Ruby', 'Rails', 'MySQL'],
  tools: ['Git', 'GitHub', 'Mobile/Responsive Development', 'RSpec', 'TDD', 'Chrome Dev Tools'],
  professional: ['Remote Pair-Programming', 'Teamwork', 'Mentoring', 'Network-Administration', 'System-Administration'],
}

listSkill(webDev, skills.webDev);
listSkill(tools, skills.tools);
listSkill(professional, skills.professional);

// Implement toggole functionality

const arrows = document.querySelectorAll('.lan-tle > i');
const hideToggle = (item) => {

  const parent = item.parentNode.parentNode;
  if (parent.className) {
    item.classList.remove('fa-angle-down');
    item.classList.add('fa-angle-right');
  } else {
    item.classList.remove('fa-angle-right');
    item.classList.add('fa-angle-down');
  }
  parent.classList.toggle('box');
};

arrows.forEach((element) => {
  element.addEventListener('click', (e) => {
    const arrow = e.target;
    hideToggle(arrow);
  })
})

// form validation
const submitBtn = document.getElementById("submitBtn");
const erroMessage = document.getElementById('erroMessage');
function validator(e) {
  const formValue = document.getElementById("email").value;
  if ((formValue == formValue.toLowerCase()) == false) {
    e.preventDefault();
    erroMessage.innerHTML = '<strong>Invalid email !!</strong> Email should be in lower case';
  }
}

submitBtn.addEventListener("click", validator);
