<template>
  <nav>
    <div class="head">
      <router-link to="/">
        <img src="/static/logo.png" class="logo" />
      </router-link>
      <div class="gap" />
      <div class="name" v-html="config.name" />
    </div>
    <div class="pages">
      <router-link to="/about">Informacje</router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

interface Config {
  name?: string
}

export default defineComponent({
  data() {
    return {
      config: {} as Config,
    }
  },

  mounted() {
    this.GetConfig().then((res) => {
      this.config = res.data
      document.title = `Assistant | ${this.config.name}` ?? 'Assistant'
    })
  },

  methods: {
    async GetConfig() {
      return await axios.get<Config>(`/static/config.json`)
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  background-color: $light;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;

  box-shadow: 0 4px 10px $gray;
}

.head {
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
  }

  img {
    height: 50px;
  }

  .name {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: $dark;
    font-weight: bold;
  }
}

.gap {
  height: 40px;
  width: 1px;
  background-color: $dark_gray;
  margin: 0 15px;
}

.pages {
  display: flex;
  gap: 20px;
}
</style>
