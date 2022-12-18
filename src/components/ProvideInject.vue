<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject component</div>
      <div class="card-body">
        <button @click="count++">Click</button>
        <p>appMessage : {{ appMessage }}</p>
        <child></child>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';
export default {
  components: { Child },
  setup() {
    const staticMessage = 'static message';
    const message = ref('message');
    const updateMessage = appendMessage => (message.value += appendMessage);
    const count = ref(10);

    //provider로 자식의 자식에게까지 데이터를 전달한다.
    provide('staticMessage', staticMessage);
    //객체형식으로 다음과 같이 전달
    //데이터값을 변경하지 못하게 하려면 readonly
    provide('message', { message: readonly(message), updateMessage });
    provide('count', count);

    //main.js 수준에서 보내는 값
    const appMessage = inject('app-message');

    return { count, appMessage };
  },
  mounted() {
    //v2버전
    console.log(this.msg);
  },
};
</script>

<style lang="scss" scoped></style>
