<template>
  <m-header></m-header>
  <tab></tab>
</template>

<script>
  import { defineComponent } from 'vue'
  import MHeader from '@/components/header/header'
  import Tab from '@/components/tab/tab'

  export default defineComponent({
    name: 'App',
    components: {
      MHeader,
      Tab
    }
  })
</script>
