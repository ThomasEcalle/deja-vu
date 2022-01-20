import anime from 'animejs';

export default function (element, done) {
    console.log("Entering Menu");
    anime({
        targets: element.getElementsByClassName("dejavu"),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 600,
        delay: anime.stagger(300),
        complete: done,
    })
}