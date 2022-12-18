<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <!--$emit : 자식 컴포넌트에서 부모 컴포넌트로 전달-->
      <!-- @click="$emit('createPost', 1, 2, 3, '김길동')"-->
      <button class="btn btn-primary" @click="createPost">추가</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  // emits: ['createPost'],

  // 유효성검사 이벤트로 주로 사용한다.
  //제일 먼저 이벤트를 타는 부분
  emits: {
    createPost: newPost => {
      console.log('validator :', newPost);
      return !newPost.type || !newPost.title ? false : true;
    },
  },
  // { emit } : context 객체에서 구조분해하여 emit 만 가져옴
  setup(props, { emit }) {
    const type = ref('news');
    const title = ref('');

    //context.emit
    const createPost = () => {
      const newPost = { type: type.value, title: title.value };
      emit('createPost', newPost);
      type.value = 'news';
      title.value = '';
    };
    return { createPost, type, title };
  },
};
</script>

<style lang="scss" scoped></style>
