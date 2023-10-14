import { ProseP } from '#build/components';
<script lang="ts" setup>
const props = defineProps(["loadVideo", "id", "title", "thumbnailUrl"]);

const showVideo = ref(false);
</script>

<template>
  <div :class="$style.video" @click="showVideo = !showVideo">
    <template v-if="!showVideo">
      <img
        :class="$style['video-media']"
        :src="thumbnailUrl"
        :alt="title"
        ref="mediaRef"
      />
      <button :class="$style['video-button']" ref="buttonRef">
        <svg width="68" height="48" viewBox="0 0 68 48">
          <path
            :class="$style['video-button-shape']"
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
          ></path>
          <path
            :class="$style['video-button-icon']"
            d="M 45,24 27,14 27,34"
          ></path>
        </svg>
      </button>
    </template>
    <template v-else>
      <iframe
        :src="`https://www.youtube.com/embed/${props.id}/?rel=0&showinfo=0&autoplay=1`"
        allow="autoplay"
        allowfullscreen
        :class="$style['video-media']"
      />
    </template>
  </div>
</template>

<style module>
.video {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #000;
}

.video-media {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-button {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  padding: 0;
  width: 68px;
  height: 48px;
  border: none;
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.video-button-shape {
  fill: #212121;
  fill-opacity: 0.8;
}

.video-button-icon {
  fill: #ffffff;
}

.video-button:focus {
  outline: none;
}

.video:hover .video-button-shape,
.video-button:focus .video-button-shape {
  fill: #ff0000;
  fill-opacity: 1;
}
</style>
