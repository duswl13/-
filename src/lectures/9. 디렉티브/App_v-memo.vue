<template>
  <div>
    <!--v-memo 는 once와는 다르게, 해당 값의 변경에만 업데이트가 가능함-->
    <div v-memo="[subscribers, views]">
      <p>subscribers : {{ subscribers }}</p>
      <p>views : {{ views }}</p>
      <p>likes : {{ likes }}</p>
    </div>
    <!--v:on 을 @로 단축 가능-->
    <button @click="subscribers++">Subs++</button>
    <button @click="views++">Views++</button>
    <button @click="likes++">Likes++</button>

    <div>
      <p>subscribers : {{ subscribers }}</p>
      <p>views : {{ views }}</p>
      <p>likes : {{ likes }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(20);
    return { subscribers, views, likes };
  },
};
</script>

<style lang="scss" scoped></style>
