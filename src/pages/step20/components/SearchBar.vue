<template>
    <div class="col s12">
        <form class="col s6 offset-s3" >
            <div class="input-field">                
                <md-input-container>
                        <md-icon>search</md-icon>                
                        <label>Search</label>
                        <md-input :value="search" required @input="onInput" v-upper></md-input>
                </md-input-container>        
            </div>
        </form>
    </div>
</template>

<script>
import upper from '../directives/UpperDirectives.js';

export default {   
    methods: {
        onInput (event) {
            this.$emit('search', event)
        }
    },
    computed: {
        search: function(){
            return this.$store.state.search.toUpperCase();
        }
    },
    directives:{
        upper
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