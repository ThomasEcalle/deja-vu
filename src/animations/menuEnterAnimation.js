import anime from 'animejs';

export default function (element, done) {
    const menuCategory = document.getElementsByClassName("menu-category");
    const menuItem = document.getElementsByClassName("menu-item");

    var timeline = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 1000,
        complete: done,
    });

    timeline
        .add({
            targets: menuCategory,
            opacity: [0, 1],
        })
        .add({
            targets: menuItem,
            translateX: [5, 0],
            opacity: [0, 1],
        }, '-=500');

    timeline.play();
}