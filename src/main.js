import Vue from 'vue';
import store from './store/store.js';
import PresetButtons from './components/PresetButtons.vue';
import ButtonComponent from './components/Button.vue';
import InputComponent from './components/Input.vue';
import CheckboxComponent from './components/Checkbox.vue';
import RadioComponent from './components/Radio.vue';
import MediaComponent from './components/Media.vue';

new Vue({
  el: '#vue-app',
  store: store,
  components: {
    PresetButtons,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    MediaComponent
  }

});