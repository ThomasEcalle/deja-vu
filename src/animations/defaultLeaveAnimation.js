import anime from 'animejs';
import { GLOBAL_ANIMATION_DURATION, GLOBAL_LETTERS_DELAY_DURATION, GLOBAL_ANIMATION_EASING } from '../constants';

export default function (element, done) {
    const targets = element.getElementsByClassName("home-title");

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
            targets: targets,
            opacity: [1, 0],
        });

    timeline.play();
}