<template>
  <div class="page-content page-content--index">
    <preset-buttons></preset-buttons>
    <button-component></button-component>
    <checkbox-component></checkbox-component>
    <checkbox-component></checkbox-component>
    <input-component></input-component>
    <radio-component :number-of-radios="3"></radio-component>
    <button-component></button-component>
    <button-component></button-component>
    <div class="flex-column">
      <radio-component></radio-component>
    </div>
    <radio-component :number-of-radios="5"></radio-component>
    <media-component>
      <audio slot="mediaSlot" src="media/Tom Tom Club - Genius of Love (downsampled).mp3" preload loop controls></audio>
    </media-component>
    <input-component></input-component>
    <div class="flex-column">
      <radio-component :number-of-radios="8"></radio-component>
      <button-component></button-component>
      <checkbox-component></checkbox-component>
    </div>
    <media-component>
      <video slot="mediaSlot" src="media/street1.mp4" preload loop controls muted width="300"></video>
    </media-component>
    <checkbox-component></checkbox-component>
    <radio-component :number-of-radios="1"></radio-component>
    <radio-component :number-of-radios="3"></radio-component>
    <popuko-component :number-of-radios="3"></popuko-component>
    <div class="flex-column">
      <radio-component :number-of-radios="3"></radio-component>
      <input-component></input-component>
      <button-component></button-component>
    </div>
    <button-component></button-component>
    <input-component></input-component>
  </div>
</template>

<script>
import PresetButtons from './../components/PresetButtons.vue';
import ButtonComponent from './../components/Button.vue';
import InputComponent from './../components/Input.vue';
import CheckboxComponent from './../components/Checkbox.vue';
import RadioComponent from './../components/Radio.vue';
import MediaComponent from './../components/Media.vue';
import PopukoComponent from './../components/Popuko.vue';

export default {
  components: {
    PresetButtons,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    MediaComponent,
    PopukoComponent
  },

  beforeRouteLeave (to, from, next) {
    // fixed this by using keep-alive
    // // need to clear store on route change (because we push new data to store on every component creation, and store will keep old data otherwise)
    // this.$store.commit('stopCascade');
    // this.$store.commit('deleteComponentData');
    next();
  }
}
</script>