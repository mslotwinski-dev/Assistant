<template>
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  components: {
    Navbar,
  },
})
</script>

<style lang="scss">
body {
  padding: 0px !important;
  margin: 0px !important;
  overflow-x: hidden;
  min-height: 100vh;
}
</style>
