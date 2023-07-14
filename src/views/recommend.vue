<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li
              v-for="item of albums"
              :key="item.id"
              class="item"
            >
              <div class="icon">
                <img v-lazy="item.pic" width="60" height="60" alt="icon_pic" />
              </div>
              <div class="text">
                <h2 class="name">{{item.username}}</h2>
                <p class="title">{{item.title}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import { defineComponent, ref, onMounted } from 'vue'
  import Slider from '@/components/base/slider/slider'
  import Scroll from '@/components/base/scroll/scroll'
  import { getRecommend } from '@/service/recommend'

  export default defineComponent({
    name: 'recommend',
    components: { Slider, Scroll },
    setup() {
      const sliders = ref([])
      const albums = ref([])
      onMounted(async () => {
        const response = await getRecommend()
        response && (sliders.value = response.sliders, albums.value = response.albums)
      })
      return {
        sliders,
        albums
      }
    }
  })
</script>

<style lang="scss" scoped>
  .recommend {
    width: 100%;
    position: fixed;
    top: 88px;
    bottom: 0;
    overflow: scroll;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        width: 100%;
        height: 0;
        position: relative;
        padding-top: 40%;
        overflow: hidden;
        .slider-content {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 0 20px 20px 20px;
          .icon {
            flex: 0 0 60px;
            width: 60px;
            padding-right: 20px;
          }
          .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            line-height: 20px;
            overflow: hidden;
            font-size: $font-size-medium;
          }
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .title {
            color: $color-text-d;
          }
        }
      }
    }
  }
</style>
