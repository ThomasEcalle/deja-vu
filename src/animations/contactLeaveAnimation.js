import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const title = document.getElementById("contact-title");
    const contactSubmit = document.getElementById("contact-submit");
    const contactLabels = element.getElementsByClassName("contact-label");
    const contactInputs = element.getElementsByClassName("contact-input");

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: done,
    });

    timeline.add({
        targets: contactSubmit,
        opacity: [1, 0],
        scale: [1, 0],
    }).add({
        targets: contactInputs,
        opacity: [1, 0],
    }, "-=1000").add({
        targets: '.letter',
        opacity: [1, 0],
        delay: (el, i) => (GLOBAL_LETTERS_DELAY_DURATION / 3) * (i + 1)
    }, "-=1000")

    timeline.play();
}