import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {

    const title = document.getElementById("detail-title");
    const subtitle = document.getElementById("detail-subtitle");
    const description = document.getElementById("detail-description");
    const playerContainer = document.getElementById("player-container");
    const playerSvg = document.getElementById("player-svg");

    var timeline = anime.timeline({
        easing: GLOBAL_ANIMATION_EASING,
        duration: GLOBAL_ANIMATION_DURATION,
        complete: done,
    });

    timeline
        .add({
            targets: title,
            opacity: [0, 1],
            translateY: [10, 0],
        })
        .add({
            targets: subtitle,
            opacity: [0, 1],
            translateX: [10, 0],
        }, '-=700')
        .add({
            targets: playerContainer,
            opacity: [0, 1],
        }, '-=600')
        .add({
            targets: playerSvg,
            opacity: [0, 1],
            translateX: [-20, 0],
        }, '-=600')
        .add({
            targets: description,
            opacity: [0, 1],
        }, '-=1000');

    timeline.play();
}