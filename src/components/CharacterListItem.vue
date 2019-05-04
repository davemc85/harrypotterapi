<template lang="html">
  <div class="character-list-item">
    <h2>{{ character.name }}</h2>
    <router-link :to="{ name: 'characterInfo', params: {character} }">Character Bio</router-link>
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style lang="css" scoped>
</style>
