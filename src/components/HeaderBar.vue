<template>
  <header>
    <nav>
      <div class="logo">
        <router-link to="/">TechLead</router-link>
      </div>
      <ul>
        <li><router-link to="/cursos">Cursos</router-link></li>
        <li><router-link to="/contato">Contatos</router-link></li>      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name:"headerBar"
}
</script>

<style scoped>
header { 
  background:#264653; 
}

header a {
  color: white;
}

a.router-link-exact-active {
  color: #2A9D8F;
}

nav{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-content: space-between;
  padding: 20px;
}

.logo {
  flex:1;
}

.logo a {
  color: #E76F51;
  font-size: 1.5rem;
}

ul li {
  display: inline-block;
}

li a {
  padding: 0px 10px;
  margin-left: 10px;
}

</style>