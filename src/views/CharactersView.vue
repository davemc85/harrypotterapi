<template lang="html">
  <div class="allcharacters">
      <h1>Students at Hogwarts</h1>
      <CharacterList :characters="characters"/>
  </div>


</template>

<script>
import CharacterList from '@/components/CharacterList';
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'

export default {
  components: {
    CharacterList,
    NavBar,
    Header
  },
  data(){
    return {
      characters: [],

    }
  },
  mounted(){
    fetch('http://hp-api.herokuapp.com/api/characters/students')
    .then(response => response.json())
    .then(characters => this.characters = characters);
  },

}
</script>

<style lang="css" scoped>

h1  {
  font-size: 50pt;
  text-align: center;
  color: white;
}

a {
  text-decoration: none;
}

</style>
