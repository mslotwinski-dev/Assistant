<template>
  <Layout>
    <div class="name">{{ departament.name }}</div>
    <div class="description">{{ departament.description }}</div>

    <div class="major" v-for="major in departament.majors" :key="major.id">
      <div class="major-name">{{ major.name }}</div>
      <router-link
        :to="`/program/${departament.id}/${major.id}/bsc`"
        v-if="major.bsc.length"
      >
        <div class="type">Studia inżynierskie</div>
      </router-link>
      <router-link
        :to="`/program/${departament.id}/${major.id}/msc`"
        v-if="major.msc.length"
      >
        <div class="type">Studia magisterskie</div>
      </router-link>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layouts/Department.vue'
import departments from '@/data'
export default defineComponent({
  data() {
    return {
      departament: departments.find((d) => d.id === this.$route.params.id),
    }
  },
  components: {
    Layout,
  },
})
</script>

<style lang="scss" scoped>
.name {
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  margin-bottom: 20px;
}

.major {
  margin-bottom: 15px;

  .major-name {
    font-size: 20px;
    font-weight: 500;
    &:before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 20px;
      background-color: $main;
      margin-right: 20px;
    }
  }

  .type {
    color: $dark;
    margin: 10px;
    transition: color 0.3s;
    &:hover {
      color: $main;
    }
  }
}
</style>
