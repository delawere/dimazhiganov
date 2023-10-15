<script setup lang="ts">
const { data } = await useAsyncData("data", () =>
  queryContent("_data").findOne()
);

const articlesList = data.value?.articles;

useHead({
  title: "Articles | Dima Zhiganov",
});
</script>

<template>
  <h1>Articles</h1>
  <ul>
    <li v-for="article in articlesList">
      <a :href="article.url" target="_blank" rel="noopener">
        {{ article.title }}
      </a>
    </li>
  </ul>
</template>
