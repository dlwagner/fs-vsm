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
                  <th>Delete</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in users" v-bind:key="index">
                  <td>{{user.id}}</td>
                  <td id="username" contenteditable="true">{{user.name}}</td>
                  <td id="email" contenteditable="true">{{user.email}}</td>
                  <td>
                    <button class="btn btn-warning" v-on:click="deleteUser(user.id, index)">Delete</button>
                  </td>
                  <td>
                    <button class="btn btn-success" v-on:click="EditUser(user.id, index)">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="row">
              <button class="btn btn-success" v-on:click="addUser()">Add</button>
              <fieldset class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="name" />
              </fieldset>
              <fieldset class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" v-model="email" />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      users: []
    };
  },
  /* eslint-disable no-console */
  methods: {
    retrieveAllUsers() {
      axios
        .get("http://localhost:8080/demo/all")
        .then(response => (this.users = response.data));
    },
    addUser() {
      axios
        .post(
          `http://localhost:8080/demo/add?name=` +
            this.name +
            `&email=` +
            this.email
        )
        .then(response => {
          console.log(response);
        });

      axios
        .get("http://localhost:8080/demo/all")
        .then(response => (this.users = response.data));

      this.name = "";
      this.email = "";
    },
    deleteUser(id, index) {
      axios
        .post(`http://localhost:8080/demo/delete?id=` + id)
        .then(response => {
          this.users.splice(index, 1);
          console.log(response);
        });
      console.log(id);
      console.log(index);
    },
    EditUser(id, index) {
      var username = document
        .getElementById("username")
        .innerHTML.replace("<br>", "");

      var email = document
        .getElementById("email")
        .innerHTML.replace("<br>", "");

      //alert(username);

      //alert(email);
      axios
        .put(
          `http://localhost:8080/demo/update?name=` +
            username +
            `&email=` +
            email +
            `&id=` +
            id
        )
        .then(response => {
          console.log(response);
        });
      console.log(
        "this.name: " + this.name,
        "this.email: " + this.email,
        this.users[index].name,
        this.users[index].email,
        username,
        email
      );
    }
  },
  created() {
    this.retrieveAllUsers();
    /* eslint-enable no-console */
  }
};
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>