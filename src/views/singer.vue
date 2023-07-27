<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers"></index-list>
  </div>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue'
  import { getSingerList } from '@/service/singer'
  import IndexList from '@/components/base/index-list/index-list'

  export default defineComponent({
    name: 'singer',
    components: { IndexList },
    data() {
      return {
        singers: []
      }
    },
    async created() {
      const response = await getSingerList()
      this.singers =  response.singers
    }
  })
</script>

<style lang="scss" scoped>
  .singer {
    width: 100%;
    position: fixed;
    top: 88px;
    bottom: 0;
  }
</style>
