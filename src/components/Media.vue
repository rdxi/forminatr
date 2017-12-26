<template>
  <div class="element-wrap" @click="toggleActive" :class="computedClass" :style="styleObject">
    <slot name="mediaSlot"></slot>
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
      var mediaElement = this.$slots.mediaSlot[0].elm;
      if (!mediaElement) return;

      if (isActive) {
        mediaElement.play();
      } else {
        mediaElement.pause();
      }
    },
    registerInStore: function() {
      this.selfId = uuid();
      this.$store.state.myComponents.push({id: this.selfId, isActive: null, isMedia: true});
    }
  },

  mounted: function() {
    var that = this;
    var mediaElement = this.$slots.mediaSlot[0].elm;

    mediaElement.addEventListener('play', function() {
      that.$store.commit('activate', {id: that.selfId});
    });

    mediaElement.addEventListener('pause', function() {
      that.$store.commit('deactivate', {id: that.selfId});
    });
  }
}
</script>

