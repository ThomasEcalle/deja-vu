import anime from 'animejs';

export default function (element, done) {
    console.log("Leaving Menu");
    anime({
        targets: element.getElementsByClassName("dejavu"),
        translateY: [0, -30],
        opacity: [1, 0],
        easing: 'easeInOutCubic',
        duration: 600,
        delay: anime.stagger(300),
        complete: done,
    });
}