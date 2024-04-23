<template>
  <scroll class="index-list" :probe-type="3" @scroll="onScroll" ref="scrollRef">
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
    <div class="list-shortcut">
      <ul>
        <li
          v-for="(group, index) in data"
          :key="group.title"
          :data-index="index"
          class="item"
          :class="{'current': currentIndex === index}"
          @touchstart.stop.prevent="onShortcutTouchStart"
          @touchmove.stop.prevent="onShortcutTouchMove"
          @touchend.stop.prevent
          >{{group.title}}</li>
      </ul>
    </div>
    <div class="fixed" :style="fixedStyle" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}}</div>
    </div>
  </scroll>
</template>

<script>
  import { defineComponent } from 'vue'
  import useFixed from './use-fixed'
  import useShortCut from './use-shortcut'
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
        fixedStyle,
        currentIndex
      } = useFixed(props)
      const {
        scrollRef,
        onShortcutTouchStart,
        onShortcutTouchMove
      } = useShortCut(props, groupRef)
      return {
        // fixed
        groupRef,
        scrollRef,
        onScroll,
        fixedTitle,
        fixedStyle,
        // shortcut
        currentIndex,
        onShortcutTouchStart,
        onShortcutTouchMove
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
    .list-shortcut {
      position: absolute;
      right: 0;
      top: 50%;
      z-index: 30;
      width: 20px;
      padding: 20px 0;
      border-radius: 10px;
      text-align: center;
      transform: translate(0, -50%);
      background: rgba(0, 0, 0, 0.3);
      ul > li.item {
        line-height: 1;
        padding: 3px;
        color: hsla(0, 0%, 100%, 0.5);
        font-size: 12px;
      }
      ul > li.current {
        color: #ffcd32;
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
