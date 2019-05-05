<template lang="html">
  <div class="professor-list">
    <ProfessorListItem v-for="(professor, index) in professors" :professor="professor" :key="index"/>
  </div>
</template>

<script>
import ProfessorListItem from '@/components/ProfessorListItem';
export default {
  props: ['professors'],
  components: { ProfessorListItem }
}
</script>

<style lang="css" scoped>

a {
  text-decoration: none;
}

</style>
