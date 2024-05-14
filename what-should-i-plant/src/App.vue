<template>
  <header>
    <div class="descrip">
      <p class="welcome">Find the best plants for your yard.</p>
      <nav>
        <RouterLink to="/explanation">Explanation</RouterLink>
        <RouterLink to="/search">Plant Search</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
  <footer>
    <div class="inverse">Thank You for Visiting.</div>
  </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {}
}
</script>
