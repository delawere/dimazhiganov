<script setup lang="ts">
import VideoElement from "~/components/VideoElement.vue";

const videoList = ref([
  {
    title: "my video",
    id: "LVG64IiEvjw",
    thumbnailUrl: "https://i.ytimg.com/vi/LVG64IiEvjw/maxresdefault.jpg",
  },
  {
    title: "my video",
    id: "fFTWZwLvFqA",
    thumbnailUrl: "https://i.ytimg.com/vi/fFTWZwLvFqA/maxresdefault.jpg",
  },
]);

const articleList = ref([
  {
    title: "Frontend System Design: Comprehensive Guide",
    coverUrl: "",
    articleUrl:
      "https://medium.com/@delawere2008/frontend-system-design-comprehensive-guide-80c58d531ee9",
  },
]);
</script>

<template>
  <div>
    <img src="/profile-photo.jpg" :class="$style['profile-photo']" />
    <ContentDoc />
    <div :class="$style.section">
      <div :class="$style.articles">
        <div v-for="article in articleList">
          <h2>Recent articles</h2>
          <a :href="article.articleUrl"> {{ article.title }}</a>
        </div>
      </div>
    </div>

    <div :class="$style.section">
      <h2>Recent videos</h2>
      <div :class="$style.videos" ref="videoNodesList">
        <VideoElement
          v-for="video in videoList"
          :key="video.title"
          :title="video.title"
          :id="video.id"
          :thumbnailUrl="video.thumbnailUrl"
        />
      </div>
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

.articles {
  display: flex;
}

.videos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
}
</style>
