<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      <p>staticMessgae : {{ staticMessgae }}</p>
      <p>message : {{ message }}</p>
      <p>count : {{ count }}</p>
      <p>AppMessage : {{ appMessage }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    //inject로 부모에서 보낸 데이터를 자식에서 받는다.
    //첫번째 인자로 키값, 두번째 인자로 값이 없을때 default값
    //inject('staticMessage', 'defaultMessage');
    const staticMessgae = inject('staticMessage', 'defaultMessage');
    //객체형식을 받을때는 다음과 같이 받는다.
    //구조분해형식으로 받을 수 있다.
    const { message, updateMessage } = inject('message');
    //message는 readonly이므로 변경할 수 없다.
    //message = '123'
    updateMessage('!');
    const count = inject('count');

    //main.js 수준에서 보내는 값
    const appMessage = inject('app-message');

    return { staticMessgae, message, count, appMessage };
  },
};
</script>

<style lang="scss" scoped></style>
