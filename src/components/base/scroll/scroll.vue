<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import useScroll from './use-scroll'

  export default defineComponent({
    name: 'scroll',
    props: {
      click: {
        type: Boolean,
        default: true
      }
    },
    setup(props) {
      const rootRef = ref(null)
      useScroll(rootRef, props)
      return {
        rootRef
      }
    }
  })
</script>
