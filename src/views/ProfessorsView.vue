<template lang="html">
  <div>
    <h1>Professors at Hogwarts</h1>
    <ProfessorList :professors="professors"/>
  </div>
</template>

<script>
import ProfessorList from '@/components/ProfessorList';

export default {
  components: {ProfessorList},
  data(){
    return {
      professors: [],

    }
  },
  mounted(){
    fetch('http://hp-api.herokuapp.com/api/characters/staff')
    .then(response => response.json())
    .then(professors => this.professors = professors);
  },

}
</script>

<style lang="css" scoped>

h1  {
  text-decoration: none;
  font-size: 50pt;
  text-align: center;
  color:white;
}

a{
  text-decoration: none;
}

</style>
