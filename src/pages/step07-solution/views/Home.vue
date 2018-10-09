<template>
  <section class="container">    
    <md-card class="card-panel">
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">
                    <a href="#" class="card-title username">
                        <span>{{person.firstname}}</span>
                        <span class="lastname">{{person.lastname}}</span>
                    </a>
                </div>
                <div class="md-subhead">
                    <div class="subtitle">{{person.entity}}</div>
                    <div class="people-data">
                        <div class="">
                            <md-icon class="md-accent">email</md-icon>
                            <span class="item">{{person.email}}</span>
                        </div>
                        <div class="">
                            <md-icon class="md-accent">phone</md-icon>
                            <span class="item">{{person.phone}}</span>
                        </div>
                    </div>
                </div>
            </md-card-header-text>
            <md-card-media md-big>
                <img class="picture" :src="person.photo" />
            </md-card-media>
        </md-card-header>
        <md-card-content>
            <md-layout>
                <md-layout md-flex="33">
                    <div>
                        <span class="label">Manager: </span>
                        <span class="item">{{person.manager}}</span>
                    </div>
                    <div>
                        <span class="label">Location: </span>
                        <span class="item">SFEIR</span>
                    </div>
                </md-layout>
                <md-layout md-flex-offset="45">
                    <a href="#">
                        <md-icon class="md-accent">mode_edit</md-icon>
                    </a>
                    <a href="#">
                        <md-icon class="md-accent">delete</md-icon>
                    </a>
                </md-layout>
            </md-layout>
        </md-card-content>
    </md-card>
    <section>
        <md-button class="md-fab md-fab-bottom-right md-primary" @click="random">
            <md-icon>cached</md-icon>
        </md-button>
    </section>
  </section>
</template>

<script>
import peopleService from '../services/PeopleService.js';


export default {  
  data(){
    return {
      person:{}
    }
  },
  created:function(){
    peopleService
    .fetch()
    .then(people=>this.person=people[0])
    .catch(console.log);
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
