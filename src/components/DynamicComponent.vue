<template>
  <div class="container py-4">
    <button
      class="btn btn-primary me-2"
      @click="changecurrentComp(DynamicApple)"
    >
      사과
    </button>
    <button class="btn btn-danger" @click="changecurrentComp(DynamicBanana)">
      바나나
    </button>
    <hr />
    <component :is="currentComp" />
    <p>{{ obj1 }}</p>
    <p>{{ obj2 }}</p>
  </div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const currentComp = shallowRef(DynamicApple);
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '홍길동' });
const changecurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>

<!--
버튼을 눌렀을 때 컴포넌트 변경하기

1) shallowRef 변수 선언, 값으로 컴포넌트 적용
2)  <component :is="currentComp" /> 컴포넌트 생성
3) change 함수 만들기


-->
