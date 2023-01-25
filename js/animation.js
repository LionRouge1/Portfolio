const left_blocks = document.querySelectorAll('article > .left_block');
const snapshoots = document.querySelectorAll('article > .snapshoot');
const txt = 'I’m Matchoudi, Glad to see you!';
const jobs = ['Software Developer', 'Front-end Developer', 'Back-end Developer', 'Full-stack Developer'];
const jobContener = document.querySelector('.job-container');
const cursor = document.querySelector('.aboutText > span');
const jobCursor = document.querySelector('.job-container > span');
const aboutText = document.querySelector('.aboutText');

const typeWriter = (container, curs, text, counter = 0) => {
  let speed = 200;
  if (counter < text.length) {
    curs.remove();
    container.innerHTML += `${text.charAt(counter)}`;
    container.appendChild(curs);
    setTimeout(() => { typeWriter(container, curs, text, counter += 1) }, speed);
  } else {
    container.innerHTML = (`${text}<span id="cursor">|</span>`);
  }
}

const deleteWriter = async (container, curs, text, counter = text.length) => {
  let speed = 200;
  container.textContent
  if (counter >= 0) {
    curs.remove();
    container.innerHTML = text.substring(0, counter);
    container.appendChild(curs);
    setTimeout(() => { deleteWriter(container, curs, text, counter -= 1) }, speed);
  } else {
    container.innerHTML = ''
  }
}

const visVersa = async () => {
  for (let job of jobs) {
    let position = jobs[jobs.indexOf(job) - 1] || job
    await new Promise((resolve) => setTimeout(resolve, 200 * txt.length));
    console.log(jobContener.textContent.slice(0, -1), position);
    if (jobContener.textContent.slice(0, -1) === position) {
      deleteWriter(jobContener, jobCursor, job)
      await new Promise(resolve => setTimeout(resolve, 200));
    } else {
      if (jobContener.textContent.length === 0) typeWriter(jobContener, jobCursor, job);
      await new Promise((resolve) => { setTimeout(resolve), 8000 });
    }
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
        callback();
      }
    });
  });

  observer.observe(b, observerConfg);
}

console.log(jobContener);

getView(() => { typeWriter(aboutText, cursor, txt) });
getView(() => { visVersa(jobContener, jobCursor) }, jobContener);

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
