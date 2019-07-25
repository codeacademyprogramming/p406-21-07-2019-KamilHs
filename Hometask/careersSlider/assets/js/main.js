const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
const quotes = document
    .querySelectorAll('.quote-container')
    .forEach(quote => {
        const para = document.createElement('p');
        para.innerText = ' “Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae.”'
        para.classList.add('quote');
        quote.appendChild(para);
    })
const slider = document.querySelector('.slider-container');
slider.style.transition = 'transform 1s linear'
slider.style.width = width * slider.childElementCount + 'px'
slider.querySelectorAll('.slider-element').forEach(element => element.style.width = width + 'px')
let navigationButtons;
let activeButton;
const buttonHolder = document.querySelector('.navbar-container');
for (let i = 0; i < slider.childElementCount; i++) {
    const newButton = document.createElement('button');
    newButton.setAttribute('data-navigation', i + 1);
    newButton.classList.add('navbar-button');
    if (i == 0) {
        newButton.classList.add('active');
        activeButton = newButton;
    }
    buttonHolder.appendChild(newButton);
    navigationButtons = document.querySelectorAll('.navbar-button');
    navigationButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            navigationButtons.forEach(item => { item.classList.remove('active'); });
            button.classList.add('active');
            button.getAttribute('data-navigation') - activeButton.getAttribute('data-navigation')
            slider.style.transform = `translateX(${width * index * -1}px)`
            activeButton = button;
        })
    });
}

const container = document.querySelector('.custom-container')
var auto = setInterval(() => activeButton = autoSlider(navigationButtons, activeButton), 5000);


container.addEventListener('mouseenter', function () {
    clearInterval(auto);
})

container.addEventListener('mouseleave', function () {
    auto = setInterval(() => activeButton = autoSlider(navigationButtons, activeButton), 5000);
})

function autoSlider(navigationButtons, activeButton) {
    navigationButtons.forEach(item => item.classList.remove('active'));
    if (navigationButtons.length == activeButton.getAttribute('data-navigation')) {
        activeButton = navigationButtons[0];
        navigationButtons[0].classList.add('active');
        slider.style.transform = `translateX(0px)`
        return navigationButtons[0];
    }
    else {
        navigationButtons[activeButton.getAttribute('data-navigation') / 1].classList.add('active');
        slider.style.transform = `translateX(${width * activeButton.getAttribute('data-navigation') * - 1}px)`
        return navigationButtons[activeButton.getAttribute('data-navigation') / 1]
    }
}