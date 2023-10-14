<script setup lang="ts">
useHead({
  title: "Dima Zhiganov | My articles",
});
import { articlesList } from "~/constants/content";
</script>

<template>
  <main>
    <h1>Articles</h1>
    <ul>
      <li v-for="article in articlesList">
        <a :href="article.url" target="_blank" rel="noopener">
          {{ article.title }}
        </a>
      </li>
    </ul>
  </main>
</template>
