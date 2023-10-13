<template>
  <div>
    <img src="/profile-photo.jpg" :class="$style['profile-photo']" />
    <ContentDoc />
  </div>
</template>

<style module>
.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 10px 10px 15px #c9c9c9;
}
</style>
