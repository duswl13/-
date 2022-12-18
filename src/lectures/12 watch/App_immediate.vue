<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const message = ref('hello vue3');
    const reverseMessage = ref('');

    watch(
      message,
      newValue => {
        reverseMessage.value = newValue.split('').reverse().join('');
      },
      //시작하자마자 실행하기 위한 옵션
      {
        immediate: true,
      },
    );
    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>
