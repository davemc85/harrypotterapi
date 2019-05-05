<template lang="html">
  <div id="main">
    <NavBar/>
    <br>
    <br>
    <br>
    <router-view id="view"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Header from '@/components/Header.vue';

export default {
  components: {NavBar, Header},
};
</script>

<style lang="css" scoped>

#view {
  font-family: 'Sofia', cursive;
  background-color: black;
}

</style>
