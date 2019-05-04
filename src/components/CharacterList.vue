<template lang="html">
  <div class="character-list">
    <CharacterListItem v-for="(character, index) in characters" :character="character" :key="index"/>
  </div>
</template>

<script>
import CharacterListItem from '@/components/CharacterListItem';
export default {
  props: ['characters'],
  components: { CharacterListItem }
}
</script>

<style lang="css" scoped>
</style>
