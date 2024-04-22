<template>
  <scroll class="index-list" :probe-type="3" @scroll="onScroll">
    <ul ref="groupRef">
      <li v-for="group in data" :key="group.title" class="group">
        <h2 class="title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.list" :key="item.id" class="item">
            <img class="avatar" v-lazy="item.pic" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="fixed" :style="fixedStyle" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
  </scroll>
</template>

<script>
  import { defineComponent } from 'vue'
  import useFixed from './use-fixed'
  import Scroll from '@/components/base/scroll/scroll'

  export default defineComponent({
    name: 'index-list',
    components: { Scroll },
    props: {
      data: {
        type: Array,
        default: () => []
      }
    },
    setup(props) {
      const {
        groupRef,
        onScroll,
        fixedTitle,
        fixedStyle
      } = useFixed(props)
      return {
        groupRef,
        onScroll,
        fixedTitle,
        fixedStyle
      }
    }
  })
</script>

<style lang="scss" scoped>
  .index-list {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .group {
      padding-bottom: 30px;
      .title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
      .item {
        display: flex;
        align-items: center;
        padding: 20px 0 0 30px;
        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .name {
          margin-left: 20px;
          color: $color-text-l;
          font-size: $font-size-medium;
        }
      }
    }
    .fixed {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      .fixed-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-small;
        color: $color-text-l;
        background: $color-highlight-background;
      }
    }
  }
</style>
