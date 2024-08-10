<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="nav">
    <router-link class="Routerlink" to ="/">Home |</router-link>
    <router-link class="Routerlink" to ="/Units">Units |</router-link>
    <router-link class="Routerlink" to ="Tasks">Tasks</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.Routerlink{
  margin-left: 5px;
}
</style>
