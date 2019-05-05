<template lang="html">
  <div class="character-list-item">
    <router-link :to="{ name: 'characterInfo', params: {character} }"><h2>{{ character.name }}</h2></router-link>
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style lang="css" scoped>

a {
    color:white;
    text-decoration: none;
    display: block;
    text-align: center;
}

h2 {
    text-decoration: none;
    text-align: center;
  }

</style>
