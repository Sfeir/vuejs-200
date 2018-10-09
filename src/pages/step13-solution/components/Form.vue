<template>
    <md-card class="card-panel">
        <md-card-header v-if="editMode">
            <div class="md-title">Update {{ person.firstname }} {{ person.lastname }}</div>
            <div class="md-subhead">{{person.id}}</div>
        </md-card-header>
        <md-card-content>
            <img class="picture" :src="person.photo || 'https://randomuser.me/api/portraits/lego/6.jpg'" />            
            <form @submit="submit">
                <md-input-container :class="{'md-input-invalid': errors.has('firstname')}">
                    <label>Firstname</label>
                    <md-input key="username-input" v-validate="'required|min:2'" v-model="person.firstname" data-vv-name="firstname"></md-input>
                    <div v-show="errors.has('firstname')" class="md-error">{{ errors.first('firstname') }}</div>
                </md-input-container>
                <md-input-container :class="{'md-input-invalid': errors.has('lastname')}">
                    <label>Lastname</label>
                    <md-input v-validate="'required|min:2'" data-vv-name="lastname" v-model="person.lastname"></md-input>
                    <div v-show="errors.has('lastname')" class="md-error">{{ errors.first('lastname') }}</div>
                </md-input-container>
                <md-input-container :class="{'md-input-invalid': errors.has('email')}">
                    <label>Email</label>
                    <md-input v-validate="'required|email'" data-vv-name="email" v-model="person.email"></md-input>
                    <div v-show="errors.has('email')" class="md-error">{{ errors.first('email') }}</div>
                </md-input-container>
                <md-input-container :class="{'md-input-invalid': errors.has('phone')}">
                    <label>Phone</label>
                    <md-input v-validate="'required|regex:\d{10}'" data-vv-name="phone" v-model="person.phone"></md-input>
                    <div v-show="errors.has('phone')" class="md-error">{{ errors.first('phone') }}</div>
                </md-input-container>
            </form>
        </md-card-content>
        <md-card-actions>
            <md-button @click.prevent="cancel">Cancel</md-button>
            <md-button @click.prevent="submit" :disabled="errors.any()">Submit</md-button>
        </md-card-actions>
    </md-card>

</template>
<script>
    export default {
        props: {
            person: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data() {
            return {

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