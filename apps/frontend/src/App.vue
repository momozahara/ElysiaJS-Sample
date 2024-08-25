<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const LoveComponent = defineAsyncComponent(
  () => import("./components/LoveComponent.vue"),
);
</script>

<template>
  <main>
    <div id="container">
      <Suspense>
        <component :is="LoveComponent" />
        <template #fallback>Loading...</template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

#container {
  margin: 0 1rem;
  max-width: 800px;
}
</style>
