<template>
  <div>
    <!--vif는 요소를 아예 삭제 하고 필요 시 재생성-->
    <h2 v-if="visible">Hello vue3</h2>
    <h2 v-else>false입니다.</h2>
    <button v-on:click="visible = !visible">toggle</button>
    <hr />
    <button v-on:click="type = 'A'">A</button>
    <button v-on:click="type = 'B'">B</button>
    <button v-on:click="type = 'C'">C</button>
    <button v-on:click="type = 'D'">D</button>

    <h2 v-if="type === 'A'">A입니다.</h2>
    <h2 v-else-if="type === 'B'">B입니다.</h2>
    <h2 v-else-if="type === 'C'">C입니다.</h2>
    <h2 v-else>A,B,C 가 아닙니다.</h2>

    <template v-if="visible">
      <h1>Title</h1>
      <p>123</p>
      <p>456</p>
    </template>

    <hr />
    <!--vshow는 요소를 생성 후 disable로 안보이게 해주는거임-->
    <h1 v-show="ok">Title 입니다.</h1>
    <button v-on:click="ok = !ok">toggle</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    const type = ref('A');
    const ok = ref(true);
    return { visible, type, ok };
  },
};
</script>

<style lang="scss" scoped></style>
