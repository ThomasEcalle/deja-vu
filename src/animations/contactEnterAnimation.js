import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const title = document.getElementById("contact-title");
    const contactSubmit = document.getElementById("contact-submit");
    const contactLabels = element.getElementsByClassName("contact-label");
    const contactInputs = element.getElementsByClassName("contact-input");

    title.innerHTML = title.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    for (var i = 0; i < contactLabels.length; i++) {
        contactLabels[i].innerHTML = contactLabels[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: done,
    });

    timeline.add({
        targets: '.letter',
        opacity: [0, 1],
        delay: (el, i) => (GLOBAL_LETTERS_DELAY_DURATION / 2) * (i + 1)
    }).add({
        targets: contactInputs,
        opacity: [0, 1],
    }, "-=800").add({
        targets: contactSubmit,
        opacity: [0, 1],
        scale: [0, 1],
    }, "-=800");

    timeline.play();
}