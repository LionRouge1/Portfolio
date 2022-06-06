const left_blocks = document.querySelectorAll('article > .left_block');
const snapshoots = document.querySelectorAll('article > .snapshoot');
const txt = document.querySelector('.aboutText').textContent;
document.querySelector('.aboutText').textContent = '';
console.log(txt);

let y = 0;
const typeWriterh1 = () => {
  let speed = 200;
  if (y < txt.length) {
    document.querySelector('.aboutText').textContent += txt.charAt(y);
    y++;
    setTimeout(typeWriterh1, speed);
  }
}

function getView(a,b = document.querySelector('.aboutText')){
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
        a();
      }
    });
  });
  
  observer.observe(b, observerConfg);
}

getView(typeWriterh1);

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
