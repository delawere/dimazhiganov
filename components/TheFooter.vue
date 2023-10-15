<template>
  <footer :class="$style.footer">
    © {{ new Date().getFullYear() }} Dima Zhiganov. Made with Nuxt and Netlify
  </footer>
</template>

<style module>
.footer {
  border-top: 1px solid #ebebeb;
  text-align: center;
  width: 100%;
  padding: 2em;
  margin-top: auto;
}
</style>
