import Vue from 'vue';
import store from './store/store.js';
import ButtonComponent from './components/Button.vue';
import InputComponent from './components/Input.vue';
import CheckboxComponent from './components/Checkbox.vue';
import RadioComponent from './components/Radio.vue';
import PresetButtons from './components/PresetButtons.vue';

new Vue({
  el: '#vue-app',
  store: store,
  components: {
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    PresetButtons
  }
});