const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;

let countTimes = 0;

loveMe.addEventListener('click', (e) => {
  //   console.log('Click');
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      //   console.log('Double click');
      clickTime = 0;

      refreshCounter();
      createHeart(e);
    } else {
      clickTime = new Date().getTime();
    }
  }
});

function refreshCounter() {
  countTimes++;
  times.innerText = countTimes;
}

const createHeart = (e) => {
  const loveMeX = loveMe.offsetLeft;
  const loveMeY = loveMe.offsetTop;

  const x = e.clientX - loveMeX;
  const y = e.clientY - loveMeY;

  const heartElement = document.createElement('i');
  heartElement.classList.add('fas');
  heartElement.classList.add('fa-heart');
  heartElement.style.left = `${x}px`;
  heartElement.style.top = `${y}px`;

  loveMe.appendChild(heartElement);

  setTimeout(() => {
    loveMe.removeChild(heartElement);
  }, 1000);
};
