<script setup>
const { data } = await useAsyncData("data", () =>
  queryContent("_data").findOne()
);

const navList = data.value?.nav;
</script>

<template>
  <header>
    <nav :class="$style.nav">
      <ul :class="$style['nav-list']">
        <li v-for="navItem of navList">
          <NuxtLink :to="navItem.to" :class="$style['nav-link']">{{
            navItem.title
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.nav {
  margin: 1em 0 2.5em 0;
}
.nav-list {
  display: flex;
  gap: 1em;
  list-style: none;
  padding: 0;
  flex-direction: row;
}

.nav-link {
  border: none;
  font-size: 1.1em;
}
</style>
