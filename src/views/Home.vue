<template>
  <DefautLayout>
    <div class="home">
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      />
      <h1>{{appUrl}}</h1>
    </div>
  </DefautLayout>
</template>

<style lang="scss" scoped>
.home {
  background-color: $grey;
}
</style>

<script>
// @ is an alias to /src
import DefautLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'home',
  components: {
    DefautLayout,
  },
  data() {
    return {
      appUrl: process.env.VUE_APP_APP_URL,
    };
  },
};
</script>
