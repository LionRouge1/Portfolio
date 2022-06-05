const left_blocks = document.querySelectorAll('article > .left_block');
const snapshoots = document.querySelectorAll('article > .snapshoot');

observerConfig = {
  root: document,
  rootMargin: '-50px',
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
