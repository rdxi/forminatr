<template>
  <div class="preset-buttons">
    <div class="preset-cascade">
      <button @click="startCascade">Start cascade</button>
      <button @click="stopCascade">Stop cascade</button>
    </div>
    <div class="preset-toggle-all">
      <button @click="activateAll">Activate all</button>
      <button @click="deactivateAll">Deactivate all</button>
    </div>
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
    },
    startCascade: function() {
      this.$store.commit('startCascade');
    },
    stopCascade: function() {
      this.$store.commit('stopCascade');
    }
    // changePreset: function(presetNumber) {
    //   this.$store.commit('changePreset', presetNumber)
    // }
  }
}
</script>

<style scoped>
  .preset-buttons {
    display: flex;
    width: 100%;
    margin-bottom: 30px;
  }
  .preset-cascade {
    margin-right: 20px;
  }
</style>


