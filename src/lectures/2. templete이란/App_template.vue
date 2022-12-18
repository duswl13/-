<template>
  <h2>보간법</h2>
  <p>{{ message }}</p>
  <!--v-once : 변경을 하지 않는다. -->
  <p v-once>{{ message }}</p>

  <button v-on:click="message += '!'">click!</button>
  <hr />
  <!--v-html : html을 html태그 그대로 보여준다. -->
  <h2>v-html</h2>
  <p v-html="rawHTML"></p>
  <h2>html</h2>
  <p>{{ rawHTML }}</p>

  <hr />
  <h2>속성 바인딩</h2>
  <!--속성에 vue를 통한 데이터를 넣고싶을 때-->
  <div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
  <!--vbind 는 실무에서 많이 사용하기 때문에, : 으로 줄일 수 있다. -->
  <input type="text" value="홍길동" :disabled="isInPutDisabled" />

  <!--다중 속성을 바인드 할 수 있다.-->
  <input :="attrs" />
  <hr />
  <h2>자바 스크립트도 가능하다.</h2>
  <h2>{{ message.split('').reverse().join('') }}</h2>
  <h2>{{ isInPutDisabled ? '예' : '아니오' }}</h2>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('안녕하세요.');
    const rawHTML = ref('<strong>안녕하세요.</strong>');

    const dynamicTitle = ref('안녕하세요.');
    const isInPutDisabled = ref(true);
    const attrs = ref({
      type: 'text',
      value: '123456',
      disabled: false,
    });
    return { message, rawHTML, dynamicTitle, isInPutDisabled, attrs };
  },
};
</script>

<style lang="scss" scoped></style>
