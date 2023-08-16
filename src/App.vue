<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contact">Contact</router-link>
  </nav>
  <transition name="routee" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* router transition */
.routee-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.routee-enter-active {
  transition: all 0.2s ease-out; 
}

.routee-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.routee-leave-active {
  transition: all 0.2s ease-in; 
}


</style>
