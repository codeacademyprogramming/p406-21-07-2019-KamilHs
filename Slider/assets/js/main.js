const listItems = document.querySelectorAll('.list-group-item');
const mainNewsImg = document.querySelector('.slider-main img');
let activeIndex = 0;

const newsImgs = [
  'https://content.thriveglobal.com/wp-content/uploads/2018/03/news-1.jpg',
  'http://www.ctvnews.ca/polopoly_fs/1.4344128.1553095687!/httpImage/image.png_gen/derivatives/landscape_620/image.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65QMAqYVeimzjqL145GrcPM4i6fyw8a8I3suKJEkQ7SAscwvzNA'
];

listItems.forEach((listItem, index) => {
  listItem.setAttribute('data-index', index);

  listItem.addEventListener('click', function () {
    mainNewsImg.setAttribute('src', newsImgs[index]);

    listItems.forEach((item) => item.classList.remove('active'));
    listItem.classList.add('active');
  })
})

mainNewsImg.setAttribute('src', newsImgs[0]);

const navigationButtons = document.querySelectorAll('.navigation-button');

navigationButtons.forEach((button) => {
  const isRight = button.getAttribute('data-navigation') === 'right';

  button.addEventListener('click', function () {
    if (isRight) {
      if ((activeIndex + 1 < newsImgs.length)) {
        activeIndex++;
      } else {
        activeIndex = 0;
      }
    } else if (!isRight) {
      if (activeIndex - 1 >= 0) {
        activeIndex--;
      } else {
        activeIndex = newsImgs.length - 1;
      }
    }

    setActiveElements(activeIndex);
  })
});

function setActiveElements(activeIndex) {
  listItems.forEach((item) => item.classList.remove('active'));
  listItems[activeIndex].classList.add('active');

  mainNewsImg.setAttribute('src', newsImgs[activeIndex]);
}
