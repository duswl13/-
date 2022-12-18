<template>
  <div class="card">
    <div class="card-body">
      <!-- type : news / notice -->
      <span class="badge bg-secondary">{{ typeName }}</span>
      <h5 class="card-title red mt-2">{{ title }}</h5>
      <p class="card-text">{{ contents }}</p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
        >좋아요</a
      >
    </div>
  </div>
</template>

<!--
  script setup은 컴포넌트 생성 시 계속해서 실행되므로, 
  최초 1번만 실행하고싶은 경우는 아래와 같이 script로 빼기
-->

<script>
console.log('난 한번만 실행될거야.');
</script>
<script setup>
import { computed } from 'vue';
import { ref } from 'vue';

console.log('script setup');
const props = defineProps({
  type: {
    type: String,
    default: 'news',
    validator: value => {
      return ['news', 'notice'].includes(value);
    },
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    // required: true,
  },
  isLike: {
    type: Boolean,
    default: false,
  },
  obj: {
    type: Object,
    default: () => {},
  },
});

const emit = defineEmits(['toggleLike']);

//console.log('AppCard setUp()');
//console.log('props.title :', props.title);

const isLikeClass = computed(() =>
  props.isLike ? 'btn-danger' : 'btn-outline-danger',
);

const color = ref('red');
color.value = 'blue';

const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));

const toggleLike = () => {
  //props.isLike = !props.isLike;

  //자식 컴포넌트에서 부모 컴포넌드로 메서드를 올리는 방법
  //값을 바꾸는 방법
  emit('toggleLike');
};
</script>

<!--scoped 속성은 style을 이 파일 안에서만 사용한다는 뜻-->
<!--속성 삭제 시 다른 파일에서도 적용된다.-->
<!--
  <style scoped>
.red {
  color: red !important;
}
</style>
-->

<!-- module 속성은 스타일을 객체화 시킨다.-->
<!-- :class="$style.red"와 같이 사용 가능하다.-->

<!--css에 v-bind 를 사용 할 수 있다. -->
<style scoped>
.red {
  color: v-bind(color) !important;
}
</style>
