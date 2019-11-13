<template>
  <div id="app" class="container-fluid">
    <div class="site-info">
      <h1>Vue-Spring-MySQL Demo</h1>
      <h2>Users Display App</h2>
    </div>
    <nav>
      <router-link class="btn-primary" to="/">Users</router-link>
      <router-link class="btn-primary" to="/add">Add</router-link> 
    </nav>
    <br/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>


