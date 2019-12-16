<template>
  <span>
    <Navbar />
    <slot />
    <Footer />
  </span>
</template>

<style lang="scss" scoped>
</style>

<script>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
  },
};
</script>
