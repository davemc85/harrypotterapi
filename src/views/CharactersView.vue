<template lang="html">
  <CharacterList :characters="characters"/>

</template>

<script>
import CharacterList from '@/components/CharacterList';

export default {
  components: {CharacterList},
  data(){
    return {
      characters: [],

    }
  },
  mounted(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(characters => this.characters = characters);
  },

}
</script>

<style lang="css" scoped>
</style>
