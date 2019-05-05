<template lang="html">
  <div id="professor-info" v-if="professor">
    <h1>{{professor.name}}</h1>
    <img id="large_pic" :src="professor.image"/>
    <h2>House: {{professor.house}}</h2>
    <p>Date of Birth: {{professor.dateOfBirth}}</p>
    <p>Ancestry: {{professor.ancestry}}</p>
    <p>Patronus: {{professor.patronus}}</p>
    <p>Played By: {{professor.actor}}</p>
    <br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {Header},
  props: ['professor'],
  mounted(){
    if(!this.professor) this.$router.push('/');
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
  font-size: 50pt;
  color:white;
  text-align: center;
}

h2 {
  color: white;
}

p {
  color: white;
}

</style>
