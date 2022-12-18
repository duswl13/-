<template>
  <main>
    <div class="container py-4">
      <ProvideInject></ProvideInject>
    </div>
  </main>
</template>

<script>
import ProvideInject from './ProvideInject.vue';
export default {
  components: {
    ProvideInject,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
