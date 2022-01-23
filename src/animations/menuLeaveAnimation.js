import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const menuCategory = document.getElementsByClassName("menu-category");
    const menuItem = document.getElementsByClassName("menu-item");

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
        targets: menuCategory,
        opacity: [1, 0],
    }).add({
        targets: menuItem,
        opacity: [1, 0],
    }, "-=800")
        .add({
            targets: '.separator',
            opacity: [1, 0],
        }, "-=800")

    timeline.play();
}