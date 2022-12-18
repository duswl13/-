<template>
  <label class="form-label" id="child-id">
    {{ label }}

    <!--   
      :value="modelValue"
      @input="event => $emit('update:modelValue')"
    -->
  </label>
  <!--현재와 같이 자식의 첫번째 요소가 2개일 경우, 부모에서 정의한 속성은 적용되지 않음-->
  <!--data-id를 받고자 하는 요소에 $attrs 쓰면 됨-->
  <input v-model="value" v-bind="$attrs" class="form-control" type="text" />
</template>

<script>
import { computed } from 'vue';

export default {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit('update:modelValue', value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>
