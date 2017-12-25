<template>
  <div class="element-wrap" @click="toggleActive" :class="computedClass" :style="styleObject">
    <audio :src="soundFilePath" ref="audio" preload loop controls>
      <!-- <div class="progress">
        <div class="progress-inner" :style="elWidth"></div>
      </div> -->
    </audio>
  </div>
</template>

<script>
import IdAndActiveState from './mixins/IdAndActiveState.vue';
import uuid from 'uuid/v4';

export default {
  mixins: [IdAndActiveState],

  props: [
    'soundFilePath'
  ],

  data: function() {
    return {
      isPlaying: false
    }
  },

  computed: {
    isActive: function () {
      var that = this;
      var currentStateObj = this.$store.state.myComponents.find(function(component) {
        return component.id === that.selfId;
      });

      this.audioPlayback(currentStateObj.isActive);
      return currentStateObj.isActive;
    }
  },

  methods: {
    audioPlayback: function(isActive) {
      if (!this.$refs.audio) return;

      if (isActive) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    registerInStore: function() {
      this.selfId = uuid();
      this.$store.state.myComponents.push({id: this.selfId, isActive: null, isAudio: true});
    }
  },

  mounted: function() {
    var that = this;

    this.$refs.audio.addEventListener('play', function() {
      that.$store.commit('activate', {id: that.selfId});
    });

    this.$refs.audio.addEventListener('pause', function() {
      that.$store.commit('deactivate', {id: that.selfId});
    });
  }
}
</script>

