<template>
  <div>
    <form action="" @submit.prevent>
      <input v-model.lazy="title" type="text" placeholder="title" />
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
      <hr />
      <button @click="save(title, contents)">저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log('저장되었습니다. title:', title, ' contents:', contents);
    };
    watchEffect(() => {
      //함수 안에 있는 값의 변경이 발생할 경우 감지한다.
      //기본적으로 최초 1회가 자동으로 실행된다.
      save(title.value, contents.value, save);
    });
    return { title, contents };
  },
};
</script>

<style lang="scss" scoped></style>
