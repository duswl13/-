<template>
  <div class="container py-4">
    {{ msg }}
    <br />
    {{ message }}
    <input type="text" v-model="message" />
    <button @click="sayHello">click!</button>
    <PostItem
      type="news"
      title="테스트중"
      contents="테스트중11"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="테스트중"
      contents="테스트중11"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="테스트중"
      contents="테스트중11"
      :is-like="true"
    ></PostItem>
    <hr />
    <!--script setup 사용 시 ref가 사용못하게 기본적으로 막혀있음-->
    <!-- 이걸 defineExpose 를 통해 오픈할 객체와 변수를 선언해주어야함-->
    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <template v-if="child">{{ child.message }}</template>
    <hr />
    <MyButton class="parent-class" />
  </div>
</template>

<!-- Setup과 같은 의미로, 미관상 편리하게 보기 위해 사용된다.-->
<!-- 선언된 변수, 컴포넌트는 바로 갖다 쓸 수 있다. return 필요 x-->
<!-- 하지만 setup에서는 컴포넌트의 ref, refs를 사용하지 못함. 사용못하게 막혀있음 -->
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from './setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

console.log('Helllo World!');
const msg = 'Hello World';
const message = ref('');
const sayHello = () => {
  alert('Hello World!');
};
const child = ref(null);

//script setup 사용 시 ref가 사용못하게 기본적으로 막혀있음
//이걸 defineExpose 를 통해 오픈할 객체와 변수를 선언해주어야함
defineExpose({
  msg,
});
</script>

<style lang="scss" scoped></style>
