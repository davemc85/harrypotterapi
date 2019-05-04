<template lang="html">
  <div id="main">
    <NavBar/>
    <Header text="Harry Potter Characters"/>
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
</style>
