<template>
    <div class="col s12">
        <form class="col s6 offset-s3" @submit.prevent>
            <div class="input-field">                
                <p>
                    <md-icon>search</md-icon>                
                    <label>Search</label>
                    <input @keyup.enter="onInput"/>
                </p>                  
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        onInput (event) {
            this.$emit('search', event.target.value)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .input-field {
        text-align: center;
        margin: auto;
        width:600px;    
    }
</style>