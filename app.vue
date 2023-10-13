<template>
  <header>
    <nav :class="$style.nav">
      <ul :class="$style['nav-list']">
        <li>
          <NuxtLink to="/" :class="$style['nav-link']"
            >Dmitriy Zhiganov</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/blog" :class="$style['nav-link']">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" :class="$style['nav-link']">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <NuxtPage />
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
}

.nav-link {
  border: none;
  font-size: 1.1em;
}
</style>
