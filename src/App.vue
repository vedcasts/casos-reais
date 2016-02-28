<script>

  import SelectionBox from './components/selection-box.vue'

  export default {
    data () {
      return {
        selectionBoxOptions: ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis'],
        selectionBoxSelected: ['dois', 'quatro', 'tres', 'seis'],
      }
    },
    components: { SelectionBox },

    methods: {
      selectedHandler (obj) {
        window.console.log(JSON.stringify(obj))
      }
    }
  }
</script>


<template>
  <div>
    <selection-box
      @selected="selectedHandler"
      name = "numeros"
      :options = "selectionBoxOptions"
      :selected = "selectionBoxSelected">
    </selection-box>
  </div>
</template>

