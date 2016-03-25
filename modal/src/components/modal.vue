
<script>
    export default {

        props: ['title', 'width', 'height', 'name'],

        computed: {
            style () {
                let str = `
                    width:${this.width}px;
                    height:${this.height}px;
                    margin-left: -${this.width/2}px;
                    margin-top: -${this.height/2}px;
                `
                return str
            },
        },

        events: {
            'open-modal' (obj) {
                this.open(obj)
            }
        },

        data () {
            return {
                isVisible: false
            }
        },

        methods: {

            open (obj) {
                if (obj.modal == this.name) {
                    this.isVisible = true
                    this.$dispatch('modal-open', { modal: this.name })
                }
            },

            close () {
                this.isVisible = false
                this.$dispatch('modal-closed', { modal: this.name })
            },
        },
    }
</script>

<template>
    <div>

        <div @click="close" class="vc-overlay" :class="{ 'vc-modal-show': isVisible, 'vc-modal-hide': !isVisible }"></div>

        <div :style="style" class="vc-modal" :class="{ 'vc-modal-show': isVisible, 'vc-modal-hide': !isVisible }">
            <div class="vc-modal-header">
                <h4>{{ title }}</h4>
                <span class="vc-modal-close" @click="close">x</span>
            </div>
            <div class="vc-modal-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .vc-modal-close {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 6px;
    }

    .vc-modal-show {
        opacity: 1;
        transition: opacity 400ms ease-in-out;
        z-index: 10000;
    }

    .vc-modal-hide {
        opacity: 0;
        transition: opacity 400ms ease-in-out, z-index 1s;
        z-index: -10000;
    }

    .vc-overlay {
        background-color: rgba(0,0,0,0.3);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .vc-modal {
        background-color: #f4f4f4;
        border-bottom: #aaa 1px solid;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 6px;
        box-shadow: 0 0 10px 10px rgba(0,0,0,0.2);
    }

    .vc-modal-header h4 {
        margin: 0;
        padding: 0 10px 0 10px;
    }

    .vc-modal-header {
        position: relative;
        border-bottom: #aaa 1px solid;
        padding: 10px 0 10px 0;
    }

    .vc-modal-body {
        padding: 15px;
    }

</style>