const burger = document.querySelector('.burger');
const navList = document.querySelector('.navList');
const navItem = document.querySelectorAll('.navItem');
const headerNav = document.querySelector('.headerNav');
const burgerIcon = document.querySelector('.burgerIcon');
const crossIcon = document.querySelector('.crossIcon');

let clicked = true;

burger.addEventListener('click', () => {
    if (clicked) {
        headerNav.style.zIndex = '8';
        navList.classList.add('navListVisible');
        navItem.forEach((item, index) => {

            item.style.animation = `navItemAnim .7s ease-in-out ${index / 30}s forwards`;
            crossIcon.style.transform = "scale(1)";
            burgerIcon.style.transform = "scale(0)";
        })
        clicked = false;
    } else {
        navList.classList.remove('navListVisible');
        setTimeout(() => { headerNav.style.zIndex = '-1'; }, 500)
        navItem.forEach((item, index) => {

            item.style.animation = `navItemAnimOut .7s ease-in-out 0.6-${index / 30}s forwards`;
            crossIcon.style.transform = "scale(0)";
            burgerIcon.style.transform = "scale(1)";
        })
        clicked = true;
    }

    headerNav.classList.toggle('headerNavBg');
})

const mediaItems = document.querySelectorAll('.mediaItem');
const shareIcon = document.querySelector('.shareIcon');
const shareIconPath = document.querySelector('.shareIconPath');

let shareClicked = true;

shareIcon.addEventListener('click', () => {
    if (shareClicked) {
        mediaItems.forEach((item, index) => {
            item.style.animation = `mediaAnimIn .3s ease-in-out ${0.2 - index / 10}s forwards`;
        })
        shareIconPath.style.fill = '#fa163f'
        shareClicked = false;
    } else {
        mediaItems.forEach((item, index) => {
            item.style.animation = `mediaAnimOut .3s ease-in-out forwards`;
        })
        shareIconPath.style.fill = 'white'
        shareClicked = true;
    }
})

const clickable = document.querySelector('.clickable');
const portfolioEx = document.querySelector('.portfolioEx');

clickable.addEventListener('click', () => {
    portfolioEx.style.display = 'block';
})

portfolioEx.addEventListener('click', () => {
    portfolioEx.style.display = 'none';
})

$(document).ready(function () {
    $("body").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        if (event.target.classList.contains('navLink')) {
            //забираем идентификатор бока с атрибута href
            var id = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({ scrollTop: top }, 600)

            navList.classList.remove('navListVisible');
            setTimeout(() => { headerNav.style.zIndex = '-1'; }, 500)
            navItem.forEach((item, index) => {

                item.style.animation = `navItemAnimOut .7s ease-in-out 0.6-${index / 30}s forwards`;
                crossIcon.style.transform = "scale(0)";
                burgerIcon.style.transform = "scale(1)";
            })
        } else {

        }
    });
});

const abousUsBg = document.querySelector('.aboutUsBg');
const firstImg = document.querySelector('.firstImg');
const secondImg = document.querySelector('.secondImg');
const thirdImg = document.querySelector('.thirdImg');

const carousel = () => {
    setInterval(() => {

    }, 3000);

}


abousUsBg.addEventListener('click', () => {
    secondImg.style.opacity = '1';
    firstImg.style.transform = 'translateX(-725px)';
    secondImg.style.transform = 'translateX(-725px)';
    setTimeout(() => {
        firstImg.style.opacity = '0';
        secondImg.style.transform = 'translateX(-1450px)';
        thirdImg.style.transform = 'translateX(-1450px)';
        firstImg.style.transform = 'translateX(725px)';
        firstImg.style.opacity = '1';
    }, 3000);
    setTimeout(() => {
        secondImg.style.opacity = '0';
        thirdImg.style.transform = 'translateX(-2175px)';
        firstImg.style.transform = 'translateX(0)';
        secondImg.style.transform = 'translateX(0)';
    }, 6000);
})

const confBtn = document.querySelector('.option > button');

//Слайдшоу в блоке О нас

var slides = document.querySelectorAll('.aboutUs img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide hiding';
    slides[(currentSlide + 2) % slides.length].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

//Слайдшоу в блоке отзывов

var reviewSlides = document.querySelectorAll('.reviewsList .reviewItem');
var reviewCurrentSlide = 0;
var reviewSlideInterval = setInterval(reviewNextSlide, 3000);

const firstReview = document.querySelector('#firstReview');
const secondReview = document.querySelector('#secondReview');
const thirdReview = document.querySelector('#thirdReview');
const checkboxes = document.querySelector('.checkboxes');
const inputs = document.querySelectorAll('.checkboxes input')

function reviewNextSlide() {
    reviewSlides[reviewCurrentSlide].style.animation = 'reviewHideAnim .5s forwards';
    reviewCurrentSlide = (reviewCurrentSlide + 1) % reviewSlides.length;
    reviewSlides[reviewCurrentSlide].style.animation = 'reviewShowAnim .5s forwards';
}

checkboxes.addEventListener('input', () => {
    clearInterval(reviewSlideInterval)
    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) % inputs.length)
        if (inputs[i].checked) {
            reviewSlides[i].className = 'reviewItem reviewShow';

            reviewSlides[(i + 1) % inputs.length].className = 'reviewItem reviewHide';

        }
    }
    if (firstReview.checked) {

    }
})

// Функционал кнопок в блоке Конфигуратора

const siteBtn = document.querySelector('.siteBtn');
const marketBtn = document.querySelector('.marketBtn');
const supportBtn = document.querySelector('.supportBtn');
const beginBtn = document.querySelector('.beginBtn');
const optionsList = document.querySelectorAll('.optionsList button');
let classCount;

supportBtn.addEventListener('click', () => {
    supportBtn.classList.toggle('btnRed');
    classCount = false;
    optionsList.forEach(item => {
        if (item.classList.contains('btnRed')) {
            classCount = true;
        }
    })

    if (classCount) {
        beginBtn.classList.add('beginBtnExpand')
    } else {
        beginBtn.classList.remove('beginBtnExpand')
    }
});

marketBtn.addEventListener('click', () => {
    marketBtn.classList.toggle('btnRed');
    classCount = false;
    optionsList.forEach(item => {
        if (item.classList.contains('btnRed')) {
            classCount = true;
        }
    })
    if (classCount) {
        beginBtn.classList.add('beginBtnExpand')
    } else {
        beginBtn.classList.remove('beginBtnExpand')
    }
});

siteBtn.addEventListener('click', () => {
    siteBtn.classList.toggle('btnRed');
    classCount = false;
    optionsList.forEach(item => {
        if (item.classList.contains('btnRed')) {
            classCount = true;
        }
    })

    if (classCount) {
        beginBtn.classList.add('beginBtnExpand')
    } else {
        beginBtn.classList.remove('beginBtnExpand')
    }
});

beginBtn.addEventListener('click', () => {
    alert('Мудрое решение!');
});

const sliderSelector = document.querySelector('.sliderSelector');
const sliderDots = document.querySelectorAll('.sliderDots');
let cx;

sliderDots.forEach(item => {
    item.addEventListener('click', () => {
        cx = item.getAttribute('cx');
        if (cx != null) {
            attr = cx;
        } else {
            console.log(1)
        }
        sliderSelector.setAttribute('cx', attr)
    })
})

const secondThing = document.querySelector('.secondThing');
const thing = document.querySelector('.thing');

thing.addEventListener('click', () => {
    secondThing.classList.toggle('secondThingUp');
})

const stages = document.querySelector('.stages');
const things = document.querySelector('.things');
const thirdThing = document.querySelector('.thirdThing');
const seventhThing = document.querySelector('.seventhThing');
const sixthThing = document.querySelector('.sixthThing');
const fourthThing = document.querySelector('.fourthThing');
const fifthThing = document.querySelector('.fifthThing');
const firstThing = document.querySelector('.firstThing');
const firstThingTwo = document.querySelector('.firstThingTwo');
const body = document.querySelector('body');

body.addEventListener('wheel', () => {

    if (window.pageYOffset > 3260) {
        things.style.position = 'fixed'
        things.style.top = '10vh';
        things.style.left = '40vw';
        things.style.marginLeft = '0';
    }
    if (window.pageYOffset > 5500 || window.pageYOffset < 3260) {
        things.style.position = 'static';
        things.style.marginLeft = '50px';
    }
    if (window.pageYOffset > 3400) {
        secondThing.classList.add('secondThingUp');
    }
    if (window.pageYOffset < 3400) {
        secondThing.classList.remove('secondThingUp');
    }
    if (window.pageYOffset > 3800) {
        thirdThing.classList.add('thirdThingUp');
    }
    if (window.pageYOffset < 3800) {
        thirdThing.classList.remove('thirdThingUp');
    }
    if (window.pageYOffset > 4000) {
        fourthThing.classList.add('fourthThingUp');
    }
    if (window.pageYOffset < 4000) {
        fourthThing.classList.remove('fourthThingUp');
    }
    if (window.pageYOffset > 4200) {
        fifthThing.classList.add('fifthThingUp');
    }
    if (window.pageYOffset < 4200) {
        fifthThing.classList.remove('fifthThingUp');
    }
    if (window.pageYOffset > 4400) {
        sixthThing.classList.add('sixthThingUp');
    }
    if (window.pageYOffset < 4400) {
        sixthThing.classList.remove('sixthThingUp');
    }
    if (window.pageYOffset > 4600) {
        seventhThing.classList.add('seventhThingUp');
    }
    if (window.pageYOffset < 4600) {
        seventhThing.classList.remove('seventhThingUp');
    }
    if (window.pageYOffset > 4800) {
        firstThing.classList.add('firstThingOut');
        firstThingTwo.classList.add('firstThingTwoOut');
    }
    if (window.pageYOffset < 4800) {
        firstThing.classList.remove('firstThingOut');
        firstThingTwo.classList.remove('firstThingTwoOut');
    }
})

function seven(m) {

    let s = m.split('').slice(-1)
    console.log(s)
}


seven(1021)