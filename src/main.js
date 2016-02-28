import Vue from 'vue'
import App from './App.vue'
import SelectionBox from './components/selection-box.vue'

new Vue({
  el: 'body',
  components: { App, SelectionBox },
  data: {
    selectionBoxOptions: ['vue.js', 'laravel', 'vanilla js'],
    selectionBoxSelected: ['laravel']
  },
  methods: {
    selectedHandler (obj) {
        window.console.log(JSON.stringify(obj))
    }
  }
})
