<template lang="html">
  <div class="professor-list-item">
    <router-link :to="{ name: 'professorInfo', params: {professor} }"><h2>{{ professor.name }}</h2></router-link>
  </div>
</template>

<script>
export default {
  props: ['professor']
}
</script>

<style lang="css" scoped>

h2 {

  text-align: center;
}

a {
    color:white;
    text-decoration: none;
    display: block;
    text-align: center;
}

</style>
