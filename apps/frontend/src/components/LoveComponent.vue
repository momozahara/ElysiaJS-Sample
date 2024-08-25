<script setup lang="ts">
import { treaty } from "@elysiajs/eden";
import type { Application } from "backend/server";

const app = treaty<Application>(import.meta.env.VITE_BACKEND_BASE_URL);

const apiLove = await app.api.love.get();
</script>

<template>
  <p>
    <span class="qoute">{{ apiLove.data.quote }}</span>
    <span class="sperator" />
    <span class="author">- {{ apiLove.data.author }}</span>
  </p>
</template>

<style scoped>
.sperator {
  display: block;
  height: 1rem;
}

.author {
  margin-inline-start: 1rem;
}
</style>
