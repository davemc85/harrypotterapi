<template lang="html">
  <nav id="nav-bar">
    <ul>
      <li><img id="navimage" src="@/assets/harrylogo.png" ></li>
      <li><router-link :to="{ name: 'characters' }">View All Students</router-link></li>
      <li><img id="navimage" src="@/assets/navbarlogo.png" alt=""></li>
      <li><router-link :to="{ name: 'professors' }">View All Professors</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
#navimage {
  height: 40pt;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  float: left;
}

a {
  text-decoration: none;
  color: black;
  font-family: cursive;
  display: block;
  padding: 15px;
  font-size: 14pt;
}

#nav-bar {
  background-color: white;
}

</style>
