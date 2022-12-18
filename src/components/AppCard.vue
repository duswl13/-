<template>
  <div class="card">
    <!--v-if="$slots.header" : header라는 슬롯이 정의되어 있으면 랜더링을 하고, 
    정의가 되어 있지 않으면 하지 않겠다.-->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="헤더 메시지">#</slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" hello-message="안녕하세요"></slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" footer-message="푸터메시지"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식 컴포넌트의 메세지 입니다.');
    //context.slots
    const hasFooter = computed(() => slots.footer);
    return { childMessage, hasFooter };
  },
};
</script>

<style lang="scss" scoped></style>
