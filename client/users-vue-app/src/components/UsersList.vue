<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">List of Users</div>
                <div class="panel-body">
                    <table class="table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" v-bind:key="user.id">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                          </tr>
                      </tbody>
                    </table>
                    <div class="row">
                        <button class="btn btn-success" v-on:click="addUser()">Add</button>
                        <fieldset class="form-group">
                          <label>Name</label>
                          <input type="text" class="form-control" v-model="name">
                        </fieldset>
                        <fieldset class="form-group">
                          <label>Email</label>
                          <input type="text" class="form-control" v-model="email">
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: "",
      email: "",
      users: []
    }
  },
  /* eslint-disable no-console */
  methods: {
    retrieveAllUsers () {
      axios.get('http://localhost:8080/demo/all')
      .then(response => (this.users = response.data))
    },
    addUser() {

     /* axios.post('http://localhost:8080/demo/add', {
        name: 'Fred',
        email: 'Flintstone'
      })
      .then(function (response) {
      console.log(response);
      })
      .catch(function (error) {
      console.log(error);
      });*/

      /*axios({
        method: 'post',
        url: 'http://localhost:8080/demo/add',
        data: {
        name: 'Fred',
        email: 'Flintstone'
        }
      });*/

      /*axios.post('baseURL', {
      name: 'Finn',
      email: 'Williams'
      });*/

      let name1 = "name=" + String(this.name);
      let email1 = "email=" + String(this.email);

      //let name1 = "name=" + this.name;
      //let email1 = "email=" + this.email;
      
      //console.log(name1, email1);

      //let pd = [`${name1}`, `${email1}`];
      let pd = [name1, email1];
      console.log(pd);

      axios({
        method: 'post',
        url: "http://localhost:8080/demo/add",
        payload: pd
      }).then((response) => {
               console.log(response);
            });
            
      
     /* axios.post(`http://localhost:8080/demo/add?name=name1&email=email1`)
      .then((response) => {
               console.log(response);
            });
            console.log(name1, email1);*/

      

      /*axios.post(`http://localhost:8080/demo/add`, {
      name: name1,
      email: email1
      }).then((response) => {
               console.log(response);
            
      })
    console.log(this.name);*/


    },
  },
  created() {
        this.retrieveAllUsers();
  /* eslint-enable no-console */
  }
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>