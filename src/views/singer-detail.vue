<template>
  <div class="singer-detail">
    <router-view></router-view>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { getSingerDetail } from '@/service/singer'

  export default defineComponent({
    name: 'singer-detail',
    props: {
      singer: Object
    },
    async created() {
      const result = await getSingerDetail(this.singer)
      console.log(result)
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
