<template>
  <div>
    <p>author : {{ author }}</p>
    <p>title : {{ title }}</p>
    <p>year : {{ year }}</p>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';

export default {
  setup() {
    const book = reactive({
      author: 'Jang',
      year: '2020',
      title: 'Vue 3 Guide',
    });

    //메모리가 재할당 되므로 그냥 string이 됨.
    //반응성을 잃어버린거임
    //const { author, title } = book;

    //toRefs는 구조분해를 하면서, 동기화하게끔 지원해줌
    const { author, title } = toRefs(book);
    const year = toRef(book, 'year');
    return { author, title, year, book };
  },
};
</script>

<style lang="scss" scoped></style>
