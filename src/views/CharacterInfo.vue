<template lang="html">
  <div id="character-info" v-if="character">
    <h1>{{character.name}}</h1>
    <img id="large_pic" :src="character.image"/>
    <h2>House: {{character.house}}</h2>
    <p>Date of Birth: {{character.dateOfBirth}}</p>
    <p>Ancestry: {{character.ancestry}}</p>
    <p>Patronus: {{character.patronus}}</p>
    <p>Played By: {{character.actor}}</p>
    <br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {Header},
  props: ['character'],
  mounted(){
    if(!this.character) this.$router.push('/');
  }
}
</script>

<style lang="css" scoped>

#large_pic{
  height: 400px;
  background-color: white;
  padding: 2pt;
  float: left;
  margin-right: 100pt;
  margin-left: 100pt;
}

h1  {
  text-align: center;
  font-size: 50pt;
  color: white;
}

h2 {
  color: white;
}

p {
  color: white;
}


</style>
