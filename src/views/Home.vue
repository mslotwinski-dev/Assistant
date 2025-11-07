<template>
  <Layout>
    <div
      v-for="department in departments"
      :key="department.id"
      class="department"
      :style="{
        backgroundImage: `url('/static/departments/${department.id}.jpg')`,
      }"
      @click="pick(department.id)"
    >
      <div class="push" />
      <div class="text">
        {{ department.name }}
      </div>
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '@/layouts/Home.vue'
import departments from '@/data'

export default defineComponent({
  data() {
    return {
      departments,
    }
  },
  components: {
    Layout,
  },

  methods: {
    pick(id: string) {
      this.$router.push(`/department/${id}`)
    },
  },
})
</script>

<style lang="scss">
.department {
  display: block;
  width: 400px;
  height: 250px;
  background: url('https://www.iberdrola.com/documents/20125/40303/Biotecnologia_746x419.jpg/5b49ef00-95ae-cad9-d383-d8c933d600b6?t=1627276463435');
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s;
  user-select: none;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  .text {
    background: #e3e3e3cc;
    font-size: 19px;
    font-weight: 500;
    padding: 10px;
  }
}
</style>
