
<script>
  import VcModal from './components/modal.vue'
  import VcLoginForm from './components/login/form.vue'
  export default {
    components: { VcModal, VcLoginForm },

    methods: {
      openModal (name) {
          this.$broadcast('open-modal', { modal: name })
      },

      clearLoginForm () {
        this.$broadcast('clear-login-form')
      },
    },
  }
</script>

<template>
  <div>

    <vc-modal @modal-closed="clearLoginForm" title="Titulo do segundo modal" width="800" height="500" name="modal2">
      <vc-login-form></vc-login-form>
    </vc-modal>

    <vc-modal title="Titulo do primeiro modal" width="500" height="333" name="modal1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione cupiditate nobis, omnis minus asperiores officiis maiores ad tempore dolore, distinctio cumque aut laborum obcaecati iure. Maiores, qui. Saepe ex, cupiditate.
    </vc-modal>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit fuga, quo nemo incidunt architecto facere, dolore nobis voluptatibus consectetur suscipit a hic accusamus provident quidem in consequuntur! Quaerat, amet!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit fuga, quo nemo incidunt architecto facere, dolore nobis voluptatibus consectetur suscipit a hic accusamus provident quidem in consequuntur! Quaerat, amet!</p>
    <div class="row">
      <div class="col-md-6">
          <button @click="openModal('modal1')" class="btn btn-primary btn-block">
            Abrir Modal!
          </button>
      </div>
      <div class="col-md-6">
          <button @click="openModal('modal2')" class="btn btn-primary btn-block">
            Abrir Modal!
          </button>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit fuga, quo nemo incidunt architecto facere, dolore nobis voluptatibus consectetur suscipit a hic accusamus provident quidem in consequuntur! Quaerat, amet!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit fuga, quo nemo incidunt architecto facere, dolore nobis voluptatibus consectetur suscipit a hic accusamus provident quidem in consequuntur! Quaerat, amet!</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur odit fuga, quo nemo incidunt architecto facere, dolore nobis voluptatibus consectetur suscipit a hic accusamus provident quidem in consequuntur! Quaerat, amet!</p>
  </div>
</template>