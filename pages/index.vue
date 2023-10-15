<script setup lang="ts">
const { data } = await useAsyncData("data", () =>
  queryContent("_data").findOne()
);

const videosList = data.value?.videos;
const articlesList = data.value?.articles;
</script>

<template>
  <img src="/profile-photo.jpg" :class="$style['profile-photo']" />
  <ContentDoc />
  <div :class="$style.section">
    <h2>Recent articles</h2>
    <ul>
      <li v-for="article in articlesList">
        <a :href="article.url" target="_blank" rel="noopener">
          {{ article.title }}
        </a>
      </li>
    </ul>
  </div>

  <div :class="$style.section">
    <h2>Recent videos</h2>
    <div :class="$style.videos" ref="videoNodesList">
      <VideoElement
        v-for="video in videosList"
        :key="video.title"
        :title="video.title"
        :id="video.id"
      />
    </div>
  </div>
</template>

<style module>
.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 10px 10px 15px #c9c9c9;
}

.section {
  margin: 2em 0;
}

.videos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1em;
}

@media (min-width: 992px) {
  .videos {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
