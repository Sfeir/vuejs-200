<template>
    <md-card class="card-panel">        
        <md-card-content>
            <img class="picture" src="https://randomuser.me/api/portraits/lego/6.jpg" />            
            <form @submit="submit">
                <md-input-container>
                    <label>Firstname</label>
                    <md-input name="firstname" v-model="person.firstname"></md-input>                    
                </md-input-container>
                <md-input-container>
                    <label>Lastname</label>
                    <md-input name="lastname" v-model="person.lastname"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Email</label>
                    <md-input name="email" v-model="person.email"></md-input>                    
                </md-input-container>
                <md-input-container>
                    <label>Phone</label>
                    <md-input name="phone" v-model="person.phone"></md-input>                    
                </md-input-container>
            </form>
        </md-card-content>
        <md-card-actions>
            <md-button @click.native="cancel">Cancel</md-button>
            <md-button @click.native="submit">Submit</md-button>
        </md-card-actions>
    </md-card>

</template>
<script>
    export default {
        data() {
            return {
                person:{}
            }
        },
        methods: {
            submit: function () {
                this.$emit('save', this.person);
            },
            cancel: function () {
                this.$emit('cancel');
            }
        }
    }

</script>
<style scoped>
    .card-panel {
        padding: 10px;
        margin: 10px !important;
        min-width: 500px;
    }
    
    .card {
        margin: 0;
    }
    
    .picture {
        border-radius: 50%;
        width: 80px;
    }
</style>