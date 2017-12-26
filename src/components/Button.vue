<template>
  <label class="element-wrap" :class="computedClass" :style="styleObject">
    <button @click="toggleActive">Click me</button>
  </label>
</template>

<script>
import IdAndActiveState from './mixins/IdAndActiveState.vue'

export default {
  mixins: [IdAndActiveState],
}
</script>