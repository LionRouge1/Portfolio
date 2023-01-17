const left_blocks = document.querySelectorAll('article > .left_block');
const snapshoots = document.querySelectorAll('article > .snapshoot');
const txt = 'I’m Matchoudi, Glad to see you!';
const cursor = document.querySelector('.aboutText > span');
const aboutText = document.querySelector('.aboutText');

const typeWriter = (container, curs, text, counter = 0) => {
  let speed = 200;
  if (counter < text.length) {
    curs.remove();
    container.textContent += `${text.charAt(counter)}`;
    container.appendChild(curs);
    setTimeout(() => { typeWriter(container, curs, text, counter += 1) }, speed);
  } else {
    container.innerHTML = (`${text}<span id="cursor">|</span>`);
  }
}

function getView(callback, b = document.querySelector('.aboutText')) {
  let observerConfg = {
    root: document,
    rootMargin: '-200px',
    threshold: 1
  }

  const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        callback(arguments[1], arguments[2], arguments[3]);
      }
    });
  });

  observer.observe(b, observerConfg);
}

getView(typeWriter, aboutText, cursor, txt);

let observerConfig = {
  root: document,
  rootMargin: '0px',
  threshold: 1
}

const observerFn = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
    }
  })
};

const observerSnap = new IntersectionObserver(observerFn, observerConfig);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.transform = 'translateY(0%)';
      entry.target.style.opacity = 1;
    }
  });
});

left_blocks.forEach((block) => {
  observer.observe(block);
});

snapshoots.forEach((snap) => {
  observerSnap.observe(snap);
});
