import Vue from 'vue';
import ButtonComponent from './components/Button.vue';
import InputComponent from './components/Input.vue';
import CheckboxComponent from './components/Checkbox.vue';
import RadioComponent from './components/Radio.vue';

new Vue({
  el: '#vue-app',
  components: {
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent
  }
});