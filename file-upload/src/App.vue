
<script>
    import VcModal from './components/modal.vue'
    import VcFileUpload from './components/file-upload/main.vue'

    export default {
        components: { VcModal, VcFileUpload },

        ready () {
            this.fileModal.width = (window.innerWidth - 100)
            this.fileModal.height = (window.innerHeight - 100)
        },

        methods: {
            openModal () {
                this.$broadcast('open-modal', { modal: 'file-upload-modal'})
            },
        },

        data () {
            return {
                fileModal: {
                    width: 0,
                    height: 0,
                }
            }
        },
    }
</script>

<template>
    <div>
        <h1>File Upload do Vedcasts</h1>
        <vc-modal
            title="File Upload"
            :width="fileModal.width" :height="fileModal.height"
            name="file-upload-modal">
            <vc-file-upload></vc-file-upload>
        </vc-modal>
        <a href="#" @click.prevent="openModal">Abrir modal</a>
    </div>
</template>