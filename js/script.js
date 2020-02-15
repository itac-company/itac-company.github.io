const burger = document.querySelector('.burger');
const navList = document.querySelector('.navList');
const navItem = document.querySelectorAll('.navItem');
const headerNav = document.querySelector('.headerNav');

let clicked = true;

burger.addEventListener('click', () => {
    if (clicked) {
        navItem.forEach((item, index) => {
            item.style.animation = `navItemAnim .2s ease-in-out ${index / 30}s forwards`;
        })
        clicked = false;
    } else {
        navItem.forEach((item, index) => {
            item.style.animation = `navItemAnimOut .5s ease-in-out 0.6-${index / 10}s forwards`;
            console.log(window.pageYOffset);
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


/*$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        if ($.browser.safari) {
            $('body').animate({ scrollTop: destination }, 1100);
        } else {
            $('html').animate({ scrollTop: destination }, 1100);
        }
        return false;
    });
});*/

$(document).ready(function () {
    $("body").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 600);
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
    /*firstImg.style.transform = 'scaleX(0)';
    secondImg.style.transform = 'scaleX(1)';
    secondImg.style.transformOrigin = 'left';
    setTimeout(() => {
        secondImg.style.transform = 'scaleX(0)';
        thirdImg.style.transform = 'scaleX(1)';
        firstImg.style.transform = 'scaleX(1)';
        firstImg.style.transformOrigin = 'right';
        firstImg.style.transform = 'scaleX(0)';
        thirdImg.style.transformOrigin = 'left';
    }, 3000);
    setTimeout(() => {
        thirdImg.style.transform = 'scaleX(0)';
        firstImg.style.transform = 'scaleX(1)';
        firstImg.style.transformOrigin = 'left';
        secondImg.style.zIndex = '-1';
        secondImg.style.transform = 'scaleX(1)';
        secondImg.style.transformOrigin = 'right';
        secondImg.style.transform = 'scaleX(0)';
        secondImg.style.zIndex = '1';
    }, 6000);*/
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

var slides = document.querySelectorAll('.aboutUs img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide hiding';
    slides[(currentSlide + 2) % slides.length].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

var reviewSlides = document.querySelectorAll('.reviewsList .reviewItem');
var reviewCurrentSlide = 0;
var reviewSlideInterval = setInterval(reviewNextSlide, 3000);

function reviewNextSlide() {
    reviewSlides[reviewCurrentSlide].className = 'reviewItem reviewHide';
    reviewSlides[(reviewCurrentSlide + 2) % reviewSlides.length].className = 'reviewItem';
    reviewCurrentSlide = (reviewCurrentSlide + 1) % reviewSlides.length;
    reviewSlides[reviewCurrentSlide].className = 'reviewItem reviewShow';
}

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