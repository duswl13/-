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

<script>
//컴포넌트 이름은 파스칼 케이스로 작성
//BaseButton
//AppButton
//VButton

import { computed } from 'vue';
import { ref } from 'vue';

//과 같은 이름을 베이스 컴포넌트 권장
//console.log('AppCard Module()');

// props: ['title', 'contents']
// 타입을 정의하려면 아래와 같이 하기

export default {
  props: {
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
  },
  emit: ['toggleLike'],
  setup(props, context) {
    //console.log('AppCard setUp()');
    //console.log('props.title :', props.title);

    const isLikeClass = computed(() =>
      props.isLike ? 'btn-danger' : 'btn-outline-danger',
    );

    const color = ref('red');
    color.value = 'blue';

    const typeName = computed(() =>
      props.type === 'news' ? '뉴스' : '공지사항',
    );

    const toggleLike = () => {
      //props.isLike = !props.isLike;

      //자식 컴포넌트에서 부모 컴포넌드로 메서드를 올리는 방법
      //값을 바꾸는 방법
      context.emit('toggleLike');
    };

    return { color, isLikeClass, typeName, toggleLike };
  },
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
