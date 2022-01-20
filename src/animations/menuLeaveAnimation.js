import anime from 'animejs';

export default function (element, done) {
    const menuCategory = document.getElementsByClassName("menu-category");
    const menuItem = document.getElementsByClassName("menu-item");

    var timeline = anime.timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        complete: done,
    });

    timeline
        .add({
            targets: menuItem,
            translateX: [0, 5],
            opacity: [1, 0],
        })
        .add({
            targets: menuCategory,
            opacity: [1, 0],
        }, '-=500');

    timeline.play();
}