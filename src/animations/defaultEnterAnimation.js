import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const targets = element.getElementsByClassName("home-title");

    for (var i = 0; i < targets.length; i++) {
        targets[i].innerHTML = targets[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: (anim) => {
            for (var i = 0; i < targets.length; i++) {
                targets[i].style = null;
            }
            done();
        },
    });

    timeline
        .add({
            targets: '.home-title',
            translateY: [30, 0],
            delay: (el, i) => 100
        })
        .add({
            targets: '.letter',
            opacity: [0, 1],
            delay: (el, i) => (GLOBAL_LETTERS_DELAY_DURATION / 2) * (i + 1)
        }, "-=1000")

    timeline.play();
}