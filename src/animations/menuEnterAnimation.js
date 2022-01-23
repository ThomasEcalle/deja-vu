import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const menuCategory = document.getElementsByClassName("menu-category");
    const menuItem = document.getElementsByClassName("menu-item");

    for (var i = 0; i < menuItem.length; i++) {
        menuItem[i].innerHTML = menuItem[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    for (var i = 0; i < menuCategory.length; i++) {
        menuCategory[i].innerHTML = menuCategory[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: (anim) => {
            for (var i = 0; i < menuItem.length; i++) {
                menuItem[i].style = null;
            }

            for (var i = 0; i < menuCategory.length; i++) {
                menuCategory[i].style = null;
            }

            done();
        },
    });

    timeline.add({
        targets: '.letter',
        opacity: [0, 1],
        delay: (el, i) => (GLOBAL_LETTERS_DELAY_DURATION / 4) * (i + 1)
    })
        .add({
            targets: '.separator',
            opacity: [0, 1],
        }, "-=1000");

    timeline.play();
}