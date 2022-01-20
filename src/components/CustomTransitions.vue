
<script setup>

import { useStore } from "vuex";
import defaultEnterAnimation from '../animations/defaultEnterAnimation';
import defaultLeaveAnimation from '../animations/defaultLeaveAnimation';
import detailEnterAnimation from "../animations/detailEnterAnimation";
import detailLeaveAnimation from "../animations/detailLeaveAnimation";
import menuEnterAnimation from "../animations/menuEnterAnimation";
import menuLeaveAnimation from "../animations/menuLeaveAnimation";
import { MENU, PAGE_DETAIL } from "../constants";

const store = useStore();

const beforeEnter = function (el) {

};

const enter = async function (el, done) {
  const elementId = el.id;
  switch (elementId) {
    case PAGE_DETAIL:
      detailEnterAnimation(el, done);
      break;
    case MENU:
      menuEnterAnimation(el, done);
      break;
    default:
      defaultEnterAnimation(el, done);
      break;
  }
};

const afterEnter = function (el) { };

const enterCancelled = function (el) { };

// --------
// LEAVING
// --------

const beforeLeave = function (el) { };

// the done callback is optional when
// used in combination with CSS
const leave = async function (el, done) {
  const elementId = el.id;
  switch (elementId) {
    case PAGE_DETAIL:
      detailLeaveAnimation(el, done);
      break;
    case MENU:
      menuLeaveAnimation(el, done);
      break;
    default:
      defaultLeaveAnimation(el, done);
      break;
  }
};

const afterLeave = function (el) { };

// leaveCancelled only available with v-show
const leaveCancelled = function (el) { };

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