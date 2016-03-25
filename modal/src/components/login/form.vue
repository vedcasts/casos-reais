
<script>
    export default {
        events: {
            'clear-login-form' () {
                setInterval(() => {
                    this.email = ''
                    this.password = ''
                }, 1000)
            }
        },

        data () {
            return {
                email: '',
                password: ''
            }
        },
    }
</script>

<template>
    <form>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" v-model="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" v-model="password" class="form-control" id="password" v-model="password">
        </div>
        <div class="row">
            <div class="col-md-12 text-right">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>
        </div>
    </form>
</template>