<template>
  <!--자식-> 부모 변수에도 접근이 가능하다. $parent-->
  <div>{{ $parent }}</div>
  <ul>
    <li v-for="fruit in $parent.fruits" :key="fruit">
      {{ fruit }}
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello!');
    const sayHello = () => {
      alert(message.value);
    };
    return { message, sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
