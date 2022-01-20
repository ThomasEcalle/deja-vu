import anime from 'animejs';

export default function (element, done) {
    console.log("Entering Menu");
    const targets = element.getElementsByClassName("dejavu");
    anime({
        targets: targets,
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeInOutCubic',
        duration: 600,
        delay: anime.stagger(300),
        complete: (anim) => {
            anim.seek(0);
        },
    })
}