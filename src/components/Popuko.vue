<template>
  <div class="element-wrap"
    @click.self="nextRadio"
    :class="computedClass"
    :style="styleObject"
  >
    <div class="image-wrap">
      <img src="media/popuko0.png" v-show="!isActive">
      <img src="media/popuko1-2.gif" v-show="isActive === 1 || isActive === 2">
      <img class="popuko-angry" src="media/popuko3.svg" v-show="isActive === 3">
    </div>
    <input type="radio"
      v-model="isActive"
      v-for="index in numberOfRadios"
      :name="generatedName"
      :value="index"
      :key="index"
    >
  </div>
</template>

<script>
import Radio from './Radio.vue'
export default {
  mixins: [Radio]
}
</script>

<style scoped>
  .image-wrap {
    width: 100%;
    pointer-events: none;
    text-align: center;
  }

  .image-wrap img {
    width: 300px;
    height: 200px;
    -khtml-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .popuko-angry {
    animation: jitter 0.1s infinite alternate;
  }

@keyframes jitter {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, 5px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>


