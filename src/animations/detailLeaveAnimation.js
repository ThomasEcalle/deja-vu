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
            opacity: [1, 0],
            translateY: [0, -30],
        })
        .add({
            targets: subtitle,
            opacity: [1, 0],
            translateX: [0, 30],
        }, '-=700').add({
            targets: description,
            opacity: [1, 0],
        }, '-=700');

    timeline.play();
}