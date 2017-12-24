<template>
  <div class="preset-buttons">
    <button @click="changePreset(1)">preset 1</button>
    <button @click="changePreset(2)">preset 2</button>
  </div>
</template>

<script>
export default {
  methods: {
    changePreset: function(presetNumber) {
      this.$store.commit('changePreset', presetNumber)
    }
  }
}
</script>

