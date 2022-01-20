import anime from 'animejs';

export default function (element, done) {
    const targets = element.getElementsByClassName("home-title");
    anime({
        targets: targets,
        translateY: [0, -30],
        opacity: [1, 0],
        easing: 'easeInOutCubic',
        duration: 600,
        delay: anime.stagger(250),
        complete: (anim) => {
            anim.set();
            for (var i = 0; i < targets.length; i++) {
                targets[i].style = null;
            }
            done();
        },
    })
}