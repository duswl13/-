<template>
  <div>
    <TheNav></TheNav>
    <TheView></TheView>
  </div>
</template>

<script>
//지역적으로 등록함
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
  components: { TheNav, TheView },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
