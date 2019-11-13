<template>
  <div v-if="this.user">
    <h4>User</h4>
    <div>
      <label>Name: </label> {{this.user.name}}
    </div>
    <div>
      <label>Email: </label> {{this.user.email}}
    </div>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a User...</p>
  </div>
</template>
 
<script>
//import http from "../http-common";
 
export default {
  name: "user",
  props: ["user"],
  methods: {
    /* eslint-disable no-console */
    
    /* eslint-enable no-console */
  }
};
</script>