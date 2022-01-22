import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const title = document.getElementById("other-detail-title");
    const description = document.getElementById("other-detail-description");

    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: done,
    });

    timeline.add({
        targets: '.letter',
        opacity: [0, 1],
        delay: (el, i) => (GLOBAL_LETTERS_DELAY_DURATION) * (i + 1)
    }).
        add({
            targets: description,
            opacity: [0, 1],
        }, "-=600");


    timeline.play();
}