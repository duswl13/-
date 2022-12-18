<template>
  <div class="card">
    <div class="card-body">Lifecycle Child</div>
    <input type="text" id="input" />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    console.log('[Child] setup');
    onBeforeMount(() => {
      console.log('[child] onBeforeMount');
    });
    onMounted(() => {
      console.log('[child] onMounted');
    });

    //마운트가 해제되기 전
    //Dom을 아직 갖고 있음
    onBeforeUnmount(() =>
      console.log('onBeforeUnmount', document.querySelector('#input')),
    );

    //마운트가 해제된 후
    //Dom에서 삭제된 후 임
    onUnmounted(() =>
      console.log('onUnmounted', document.querySelector('#input')),
    );
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
