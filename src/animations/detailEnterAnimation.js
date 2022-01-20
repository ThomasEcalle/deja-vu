import anime from 'animejs';

export default function (element, done) {

    const title = document.getElementById("detail-title");
    const subtitle = document.getElementById("detail-subtitle");
    const description = document.getElementById("detail-description");

    var timeline = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        complete: done,
    });

    timeline
        .add({
            targets: title,
            opacity: [0, 1],
            translateY: [30, 0],
        })
        .add({
            targets: subtitle,
            opacity: [0, 1],
            translateX: [30, 0],
        }, '-=700').add({
            targets: description,
            opacity: [0, 1],
        }, '-=500');

    timeline.play();
}