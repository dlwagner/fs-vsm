<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">List of users</div>
                <div class="panel-body">
                    <table class="table">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" v-bind:key="user.id">
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                          </tr>
                      </tbody>
                    </table>
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
      users: []
    }
  },
  /* eslint-disable no-console */
  mounted () {
    axios.get('http://localhost:8080/demo/all')
      .then(response => (this.users = response.data))
  } 
  /* eslint-enable no-console */
}
</script>

<style>
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);
</style>