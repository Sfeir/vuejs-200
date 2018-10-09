<template>
    <md-card class="card-panel">
        <md-card-header v-if="editMode">
            <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
            <div class="md-subhead">{{person.id}}</div>
        </md-card-header>
        <md-card-content>
            <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'" />
            <form @submit="submit">
                <md-input-container :class="{ 'md-input-invalid': $v.person.firstname.$error }">
                    <label>Firstname</label>
                    <md-input @input="$v.person.firstname.$touch()" v-model="person.firstname"></md-input>                
                    <div class="md-error">
                        <span v-show="!$v.person.firstname.required">Champs obligatoire</span>                         
                        <span v-show="$v.person.firstname.required && !$v.person.firstname.maxLength">Vous devez saisir au moins 2 caractères</span>                         
                    </div>                         
                </md-input-container>
                <md-input-container :class="{ 'md-input-invalid': $v.person.lastname.$error }">
                    <label>Lastname</label>
                    <md-input @input="$v.person.lastname.$touch()" v-model="person.lastname"></md-input>                
                    <div class="md-error">
                        <span v-show="!$v.person.lastname.required">Champs obligatoire</span>                         
                        <span v-show="$v.person.lastname.required && !$v.person.lastname.maxLength">Vous devez saisir au moins 2 caractères</span>                         
                    </div>                         
                </md-input-container>
                <md-input-container :class="{ 'md-input-invalid': $v.person.email.$error }">
                    <label>Email</label>
                    <md-input @input="$v.person.email.$touch()" v-model="person.email"></md-input>                
                    <div class="md-error">
                        <span v-show="$v.person.email.$error && !$v.person.email.required">Champs obligatoire</span>                         
                        <span v-show="$v.person.email.$error && !$v.person.email.email">Vous devez saisir un mail valide</span>                                                 
                    </div>                         
                </md-input-container>
                <md-input-container>
                    <label>Phone</label>
                    <md-input v-model="person.phone"></md-input>                                    
                </md-input-container>
            </form>
        </md-card-content>
        <md-card-actions>
            <md-button @click.prevent="cancel">Cancel</md-button>
            <md-button @click.prevent="submit" :disabled="$v.person.$invalid">Submit</md-button>
        </md-card-actions>
    </md-card>    
</template>
<script>
    import { required, minLength, email } from 'vuelidate/lib/validators'
    

    export default {
        props: {
            person:{
                type:Object,
                default:function(){
                    return {firstname:'',lastname:'',email:'',phone:''};
                }
            }
        },
        data() {
            return {
             
            }
        },
        validations: {
            person:{
                firstname: {
                    required,
                    minLength: minLength(2)
                },
                lastname: {
                    required,
                    minLength: minLength(2)
                },
                email: {
                    required,
                    email
                }
            }
        },
        computed: {
            editMode: function () {
                return this.person && this.person.id;
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