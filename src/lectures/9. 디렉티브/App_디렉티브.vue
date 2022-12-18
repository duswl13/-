<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <div v-html="htmlStr"></div>
    <div v-text="htmlStr"></div>
    <div v-pre>{{ msg 안녕하세요}}</div>

    <!--한번만 랜더링이 되기 때문에, 추후에 msg가 업데이트 되더라도 같이 변하지 않음-->
    <!--또한 이 안에 있는 이벤트도 마찬가지로 안됨-->
    <p v-once>{{ msg }} !!!!</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('안녕하세요');
    const htmlStr = ref('<strong>안녕!</strong>');
    return { msg, htmlStr };
  },
};
</script>

<style lang="scss" scoped></style>
