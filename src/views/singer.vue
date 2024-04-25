<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger"></index-list>
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { getSingerList } from '@/service/singer'
  import IndexList from '@/components/base/index-list/index-list'

  export default defineComponent({
    name: 'singer',
    components: { IndexList },
    data() {
      return {
        singers: [],
        selectedSinger: null
      }
    },
    async created() {
      const response = await getSingerList()
      this.singers = response.singers
    },
    methods: {
      selectSinger(singer) {
        this.selectedSinger = singer
        this.$router.push(`/singer/${singer.mid}`)
      }
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
