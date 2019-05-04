<template lang="html">
  <div id="character-info" v-if="character">
    <Header :text="character.name"/>
    <h2 v-if="character.house">{{character.house}}</h2>
    <img id="large_pic" :src="character.image"/>

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
}

</style>
