
<script setup>

    import anime from 'animejs';
 // --------
  // ENTERING
  // --------

  const beforeEnter = function (el) {
    
  };

  // the done callback is optional when
  // used in combination with CSS
  const enter = async function (el, done) {
    anime({
        targets: el.getElementsByClassName("toto"),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: 'easeInQuad',
        duration: 600,
        delay: anime.stagger(300),
        complete: done,
    });
  };

  const afterEnter = function (el) {};

  const enterCancelled = function (el) {};

  // --------
  // LEAVING
  // --------

  const beforeLeave =function (el) {};

  // the done callback is optional when
  // used in combination with CSS
  const leave = async function (el, done) {
    anime({
        targets: el.getElementsByClassName("toto"),
        translateY: [0, -30],
        opacity: [1, 0],
        easing: 'easeOutQuad',
        duration: 600,
        delay: anime.stagger(300),
        complete: done,
    });
  };

  const afterLeave = function (el) {};

  // leaveCancelled only available with v-show
  const leaveCancelled = function (el) {};

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

</script>

<template>
    <transition 
        appear
        mode="out-in"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
        v-bind:css="false"
        >
        <slot></slot>
    </transition>
</template>

<style scoped>

</style>