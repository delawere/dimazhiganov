<script setup>
import { pagesList } from "~/constants/main";
</script>

<template>
  <div :class="$style.wrapper">
    <header>
      <nav :class="$style.nav">
        <ul :class="$style['nav-list']">
          <li v-for="navItem of pagesList">
            <NuxtLink :to="navItem.to" :class="$style['nav-link']">{{
              navItem.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <NuxtPage />
    <footer :class="$style.footer">
      {{ new Date().getFullYear() }} - © Dima Zhiganov
    </footer>
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

.footer {
  border-top: 1px solid #ebebeb;
  text-align: center;
  width: 100%;
  padding: 2em;
  margin-top: auto;
}
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
