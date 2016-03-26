
<script>
    import filer from './jQuery.filer-1.0.5/js/jquery.filer.js'
    import { setup } from './filer-setup'
    export default {
        ready () {
            const postUrl = 'http://vedcasts-file-upload.app/api/files/upload'
            setup(this.$els.fileInput, postUrl)
        }
    }
</script>

<template>
    <div><input type="file" name="files[]" v-el:file-input></div>
</template>

<style src="./jQuery.filer-1.0.5/css/jquery.filer.css"></style>
<style src="./jQuery.filer-1.0.5/css/themes/jquery.filer-dragdropbox-theme.css"></style>