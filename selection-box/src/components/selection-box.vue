
<script>
    export default {

        props: {
            name: {
                type: String,
                required: true
            },
            options: {
                type: Array,
                default () {
                    return []
                }
            },
            selected: {
                type: Array,
                default () {
                    return []
                }
            }
        },

        data () {
            return {
                toggle: false
            }
        },

        methods: {
            changeHandler () {
                this.$dispatch('selected', {
                    name: this.name,
                    selected: this.selected
                })
            },

            triggerHandler () {
                this.toggle = !this.toggle
            },

            htmlClickEventHandler (ev) {
                let componentClicked = ev.path.some((item) => {
                    return item.classList != undefined && item.classList.contains('selection-box')
                })

                if(!componentClicked) {
                    this.toggle = false
                }
            }
        },

        ready () {
            const htmlEl = document.getElementsByTagName('html')[0]
            htmlEl.addEventListener('click', this.htmlClickEventHandler)
        },

        beforeDestroy () {
            const htmlEl = document.getElementsByTagName('html')[0]
            htmlEl.removeEventListener('click', this.htmlClickEventHandler)
        }
    }
</script>

<template>
    <div class="selection-box">
        <div class="trigger" :class="{ 'trigger-bottom': !toggle }">
            <div @click="triggerHandler">
                <span v-show="selected.length > 0">{{ selected.join(', ') }}</span>
                <span v-show="selected.length == 0">Selecionar uma ou + opções</span>
            </div>
            <div class="dropdown" :class="{ 'dropdown-above-all': toggle }" v-show="toggle">
                <ul>
                    <li v-for="opt in options">
                        <label>
                            <input
                                type="checkbox"
                                v-model="selected"
                                @change="changeHandler"
                                value="{{ opt }}"> {{ opt }}</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .trigger, .dropdown {
      font-family: Helvetica;
      font-size: 0.9em;
      width: 250px;
  }

  .trigger {
      height: 15px;
      border: #ccc 1px solid;
      padding: 10px;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      background-color: #f4f4f4;
      position: relative;
      cursor: pointer;
  }

  .trigger-bottom {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
  }

  .dropdown {
      background-color: #fff;
      padding: 10px 10px 0 10px;
      position: absolute;
      left: -1px;
      top: 36px;
      border-left: #ccc 1px solid;
      border-right: #ccc 1px solid;
      border-bottom: #ccc 1px solid;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
  }

  .dropdown-above-all {
      z-index: 10000;
  }

  .dropdown ul > li {
      list-style: none;
      margin-left: -25px;
  }
</style>
