<template>
  <div class="page-content-inner page-content-inner--dynamic">
    <h2>inner page [{{ pageName }}]</h2>
    <div>{{textObj[pageName]}}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['pageName'],

  data: function() {
    return {
      textObj: {
        'inner-dynamic-route-01': 'Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental.',

        'inner-dynamic-route-99': 'A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.'
      }
    }
  }
}
</script>




