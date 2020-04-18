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
        }
    });
});


let numbers = document.querySelector('.svgNumbers');
let secondTextLi = document.querySelectorAll('#secondText li');
let firstTextLi = document.querySelectorAll('#firstText li');
let thirdTextLi = document.querySelectorAll('#thirdText li');
let fourthTextLi = document.querySelectorAll('#fourthText li');
let numberOne = document.querySelector('#numberOne');
let numberTwo = document.querySelector('#numberTwo');
let numberThree = document.querySelector('#numberThree');
let numberFour = document.querySelector('#numberFour');
let bool = true;

numberOne.addEventListener('click', () => {
    /*if (bool) {
        firstTextLi.forEach((item, index) => {
            item.style.animation = `numbersAnimOut 1s ease-in-out ${index / 30}s forwards`;
        })
        secondTextLi.forEach((item, index) => {
            item.style.animation = `numbersAnimIn 1s ease-in-out ${index / 30}s forwards`;
        })
        bool = false;
        console.log(secondTextLi.length)
    } else {
        firstTextLi.forEach((item, index) => {
            item.style.animation = `numbersAnimIn 1s ease-in-out ${index / 30}s forwards`;
        })
        secondTextLi.forEach((item, index) => {
            item.style.animation = `numbersAnimOut 1s ease-in-out ${index / 30}s forwards`;
        })

        bool = true;
    }*/
    numberTwo.style.fill = 'white'
    numberOne.style.fill = 'Blue'

    firstTextLi.forEach((item, index) => {
        if (item.style.transform != 'translateX(0)' && item.style.animationName != 'numbersAnimIn') {
            item.style.animation = `numbersAnimIn 1s ${index / 30}s forwards`;
            item.style.transform = 'translateX(0)';
        }
    })
    secondTextLi.forEach((item, index) => {
        if (item.style.animationName = 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
            item.style.transform = 'translateX(-3000px)';
        }
    })
    /*thirdTextLi.forEach((item, index) => {
        if (item.style.animationName != 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
        }
    })
    fourthTextLi.forEach((item, index) => {
        if (item.style.animationName != 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
        }
    })*/
})

numberTwo.addEventListener('click', () => {
    numberOne.style.fill = 'white';
    numberTwo.style.fill = 'blue';

    secondTextLi.forEach((item, index) => {
        item.style.animation = `numbersAnimIn 1s ${index / 30}s forwards`;
        item.style.transform = 'translateX(0)';
    })
    firstTextLi.forEach((item, index) => {
        if (item.style.animationName = 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
            item.style.transform = 'translateX(-3000px)';
        }
    })
    /*thirdTextLi.forEach((item, index) => {
        if (item.style.animationName != 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
        }
    })
    fourthTextLi.forEach((item, index) => {
        if (item.style.animationName != 'numbersAnimIn') {
            item.style.animation = `numbersAnimOut 1s ${index / 30}s forwards`;
        }
    })*/
})


let trs = document.querySelector('.try');
let tryLi = document.querySelectorAll('.try li');
let yyy = '0';

trs.addEventListener('click', () => {

    if (yyy > -79 * 3) {
        yyy -= 79;
    } else if (yyy < 0) {
        yyy += 79;
    }
    tryLi.forEach(e => {
        e.style.transform = `translateX(${e.style.transform.replace(/[^-\d]/g, '') - 79}px)`;
        console.log(`${yyy - 2}`)
        console.log()
    })
})