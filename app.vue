<template>
  <div :class="$style.wrapper">
    <TheNavBar />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style module>
.wrapper {
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 992px) {
  .wrapper {
    width: 80%;
  }
}
</style>
