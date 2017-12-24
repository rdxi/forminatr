<template>
  <div class="preset-buttons">
    <button @click="activateAll">Activate all</button>
    <button @click="deactivateAll">Deactivate all</button>
  </div>
</template>

<script>
export default {
  methods: {
    activateAll: function() {
      this.$store.commit('activateAll');
    },
    deactivateAll: function() {
      this.$store.commit('deactivateAll');
    }
    // changePreset: function(presetNumber) {
    //   this.$store.commit('changePreset', presetNumber)
    // }
  }
}
</script>

