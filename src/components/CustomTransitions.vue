
<script setup>

 // --------
  // ENTERING
  // --------

  const beforeEnter = function (el) {
    console.log("before Enter");
    const totos = el.getElementsByClassName("toto");
    for(var i = 0; i < totos.length; i++) {
        const element = totos[i];
        element.style.opacity = 0;
    }
  };

  // the done callback is optional when
  // used in combination with CSS
  const enter = async function (el, done) {
    console.log("Enter");
    const totos = el.getElementsByClassName("toto");

    for(var i = 0; i < totos.length; i++) {
        totos[i].animate([
        // keyframes
        { transform: 'translateY(30px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
        ], {
            // timing options
            duration: 600,
            iterations: 1
        });
        totos[i].style.opacity = 1;
        await timeout(300);
    }

    done()
  };

  const afterEnter = function (el) {
     console.log("After Enter");
        
  };

  const enterCancelled = function (el) {
     console.log("Enter Cancelled");
  };

  // --------
  // LEAVING
  // --------

  const beforeLeave =function (el) {
    console.log("Before leave");
  };

  // the done callback is optional when
  // used in combination with CSS
  const leave = async function (el, done) {
    
    const totos = el.getElementsByClassName("toto");

    for(var i = 0; i < totos.length; i++) {
        totos[i].animate([
        // keyframes
        { transform: 'translateY(0px)', opacity: 1 },
        { transform: 'translateY(-30px)', opacity: 0 }
        ], {
            // timing options
            duration: 600,
            iterations: 1
        });
        totos[i].style.opacity = 0;
        await timeout(300);
    }

    done()
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