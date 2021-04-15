<template>
  <div id="app">
    <HeaderBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';

export default ({
  components: {
    HeaderBar
  }
});
</script>


<style>
body {
  margin:0px; 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #264653;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a{
  font-weight: bold;
  text-decoration: none;
  color: #264653;
}

a.router-link-exact-active {
  color: #2A9D8F;
}

</style>
