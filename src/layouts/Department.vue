<template>
  <div class="content">
    <div class="select">
      <label>Rok akademicki</label>
      <div>2026/2027</div>
      <div>2025/2026</div>
      <div>2024/2025</div>

      <label>Stopień studiów</label>
      <div>Inżynierskie</div>
      <div>Magisterskie</div>
    </div>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.content {
  max-width: 1700px;
  display: flex;
  flex-grow: 1;
  margin: 0 auto;
}

.select {
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 60px);

  label {
    font-weight: 500;
    font-size: 18px;
    color: $dark;
    margin-top: 30px;
  }

  div {
    width: 250px;
    padding: 10px;
    background-color: #f3f3f3;
    border: 2px solid $main;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;

    &.active,
    &:hover {
      background: $main;
    }
  }
}

.container {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}
</style>
