<template>
  <section class="container">    
    <sfeir-card :person="person" @delete="random"></sfeir-card>
    <md-button class="md-fab md-fab-bottom-right md-primary" @click="random">
      <md-icon>cached</md-icon>
    </md-button>
  </section>
</template>

<script>
import CardPanel from '../components/CardPanel.vue'
import peopleService from '../services/PeopleService.js';


export default {  
  components:{
    'sfeir-card': CardPanel
  },
  data(){
    return {
      person:{}
    }
  },
  beforeRouteEnter (route, redirect, next) {
    peopleService
      .fetchRandom()
      .then(person => next(vm => {
        vm.person = person;
      }))
      .catch(console.log.bind(console))
  },
  methods:{
    random: function(){
      peopleService
      .fetchRandom()
      .then(person =>this.person = person)
      .catch(console.log);
    }
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-panel {
		padding: 10px;
		margin: 10px !important;
		min-width: 500px;
	}
	
	.card-panel:hover {
		box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);
	}
	
	.md-card .md-subhead {
		opacity: 1;
	}
	
	.picture {
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
	
	.username {
		color: #337ab7;
		font-size: 24px;
		font-weight: 400;
	}
	
	.lastname {
		text-transform: uppercase;
	}
	
	.subtitle {
		color: rgba(0, 0, 0, 0.54);
	}
	
	.people-data {
		margin-top: 20px;
	}
	
	.item {
		color: #337ab7;
	}
	
	.people-data a {
		padding-left: 10px;
	}
	
	.icon {
		color: lightslategrey;
		width: 24px;
		height: 24px;
	}
	
	.label {
		font-weight: bold;
	}
	
	.skills {
		padding: 10px;
		margin: 10px;
		background-color: #FAFAFA;
	}
	
	.skills h3 {
		font-size: 24px;
		font-weight: normal;
		line-height: 1.1;
	}
	
	.skills a {
		background-color: white;
		color: #000;
		margin: 5px;
	}
	
	.links {
		text-align: center;
	}
	
	.links img {
		padding: 0 5px;
	} 
</style>
