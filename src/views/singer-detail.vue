<template>
  <div class="singer-detail">
    <music-list :songs="songs" :title="title" :pic="pic"></music-list>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import MusicList from '@/components/music-list/music-list'
  import { getSingerDetail } from '@/service/singer'
  import { processSongs } from '@/service/song'

  export default defineComponent({
    name: 'singer-detail',
    props: {
      singer: Object
    },
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer && this.singer.name
      },
      pic() {
        return this.singer && this.singer.pic
      }
    },
    async created() {
      const result = await getSingerDetail(this.singer)
      const songs = await processSongs(result.songs)
      this.songs = songs
    },
    components: {
      MusicList
    }
  })
</script>

<style lang="scss" scoped>
  .singer-detail {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 30;
    background: $color-background;
  }
</style>
