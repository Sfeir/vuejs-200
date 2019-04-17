<template>
    <div>
        <div class="header row">
            <h1 class="col s12 flow-text">You have {{people.length}} contacts</h1>
            <search-bar @search="filterPeople"></search-bar>
        </div>
        <section class="container">
            <sfeir-card v-for="person in people" :person="person" :key="person.id" @delete="deletePerson"></sfeir-card>
        </section>
        <md-dialog ref="dialog">
            <md-dialog-title>Contact informations</md-dialog-title>
            <md-dialog-content>
                <sfeir-form @save="addPerson" @cancel="hideDialog"></sfeir-form>
            </md-dialog-content>
        </md-dialog>

        <md-button class="md-fab md-fab-bottom-right md-primary" @click="showDialog">
            <md-icon>add</md-icon>
        </md-button>
    </div>
</template>

<script>
    import CardPanel from '../components/CardPanel.vue'
    import Form from '../components/Form.vue'
    import peopleService from '../services/PeopleService.js';
    import SearchBar from '../components/SearchBar.vue'


    export default {
        components: {
            'sfeir-card': CardPanel,
            'sfeir-form': Form,
            'search-bar': SearchBar
        },
        data() {
            return {
                people: []
            }
        },
        beforeRouteEnter(route, redirect, next) {
            peopleService
                .fetch()
                .then(people => next(vm => {
                    vm._people = vm.people = people;
                }))
                .catch(console.log.bind(console))
        },
        methods: {
            deletePerson: function (person) {
                peopleService
                    .delete(person.id)
                    .then((people) => {
                        this._people = this.people = people;
                    })
                    .catch(console.log)
            },
            addPerson: function (person) {
                peopleService
                    .create(person)
                    .then((person) => {
                        this._people.push(person);
                        this.hideDialog();
                    })
                    .catch(console.log)
            },
            showDialog() {
                this.$refs['dialog'].open();
                this.showModal = true;
            },
            hideDialog() {
                this.$refs['dialog'].close();
                this.showModal = false;
            },
            filterPeople(search) {
                search = search.toLowerCase()
                if (!search) {
                    this.people = this._people
                }
                else {
                    this.people = this._people.filter(item => {
                        return item.firstname.toLowerCase().indexOf(search) != -1 || item.lastname.toLowerCase().indexOf(search) != -1;
                    });
                }
            }
        }
    }

</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    
    .header {
        text-align: center;
    }
  
    .header h1 {
        font-weight: bold;
    }

</style>