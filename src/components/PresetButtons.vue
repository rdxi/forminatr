<template>
  <div class="preset-buttons">
    <div class="preset-buttons-title">
      Presets:
    </div>
    <div class="preset-button-wrap preset-button-wrap--toggle-all">
      <button @click="activateAll">Activate all</button>
      <button @click="deactivateAll">Deactivate all</button>
    </div>
    <div class="preset-button-wrap preset-button-wrap--cascade">
      <button @click="startCascade">Start cascade</button>
      <button @click="stopCascade">Stop cascade</button>
      <label>
        <input type="checkbox" v-model="ignoreMedia">
        <span>Ignore media</span>
      </label>
    </div>
    <div class="preset-button-wrap preset-button-wrap--invert">
      <button @click="invertActive">Invert active</button>
    </div>
    <!-- <label class="preset-button-wrap">
      <input type="checkbox" v-model="ignoreMedia">
      <span>Ignore media</span>
    </label> -->
  </div>
</template>

<script>
export default {
  computed: {
    ignoreMedia: {
      get: function () {
        return this.$store.state.ignoreMedia;
      },
      set: function(checkboxValue) {
        this.$store.commit('toggleIgnoreMedia', checkboxValue);
      }
    },
  },
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
    },
    invertActive: function() {
      this.$store.commit('invertActive');
    }
  }
}
</script>

<style scoped>
  .preset-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .preset-buttons-title {
    margin-right: 20px;
  }

  .preset-button-wrap {
    margin-right: 20px;
    padding: 20px;
    outline: 1px solid #000;
  }
</style>


