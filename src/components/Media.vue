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
      var currentStateObj = this.$store.getters.getComponentById(this.selfId);
      this.audioPlayback(currentStateObj.isActive);

      return currentStateObj.isActive;
    }
  },

  watch: {
    // to keep playing on route change, dunno why it stops though
    '$route': function(route) {
      var currentStateObj = this.$store.getters.getComponentById(this.selfId);
      this.audioPlayback(currentStateObj.isActive);
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
      if (that.$route.path !== '/') return;
      that.$store.commit('deactivate', {id: that.selfId});
    });
  }
}
</script>

