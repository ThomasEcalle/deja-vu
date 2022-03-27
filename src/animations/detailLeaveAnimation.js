import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const title = document.getElementById("detail-title");
    const subtitle = document.getElementById("detail-subtitle");
    const description = document.getElementById("detail-description");
    const playerContainer = document.getElementById("player-container");
    const detailSeparators = document.getElementsByClassName("detail-separators");

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: done,
    });

    timeline
        
        
        .add({
            targets: title,
            opacity: [1, 0],
            translateY: [0, -10],
        })
        .add({
            targets: playerContainer,
            opacity: [1, 0],
        }, "-=700")
        .add({
            targets: subtitle,
            opacity: [1, 0],
            translateX: [0, -10],
        }, '-=700').add({
            targets: description,
            opacity: [1, 0],
        }, '-=700').add({
            targets: detailSeparators,
            opacity: [1, 0],
        }, '-=700');

    timeline.play();
}