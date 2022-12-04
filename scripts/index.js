"use strict"

$('.menu__span').addEventListener('click', (e) => {

    if (e.target.classList.contains('menu__span')) {
        $('.menu').classList.remove('swipe')
    }
    else if (e.target.classList.contains('menu__text')) {
        $('.menu').classList.remove('swipe')
    }
    else {
        $('.menu').classList.remove('swipe')
    }
})


$('.menu__close').addEventListener('click', (e) => {
    if (e.target.classList.contains('bg-danger')) {
        $('.menu').classList.add('swipe');
    }
})
