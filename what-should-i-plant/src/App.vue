<template>
  <header>
    <div class="descrip">
      <p class="welcome">Find the best plants for your yard.</p>
      <nav>
        <RouterLink to="/explanation">Explanation</RouterLink>
        <RouterLink to="/search">Plant Search</RouterLink>
        <RouterLink to="/plants">My Plants</RouterLink>
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
  <FooterBlock />
</template>

<script>
import FooterBlock from './components/FooterBlock.vue'

export default {
  name: 'App',
  components: { FooterBlock }
}
</script>
