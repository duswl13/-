<template>
  <div>
    <div
      class="text"
      :class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
    >
      텍스트입니다.
    </div>
    <button v-on:click="toggle">toggle1</button>
    <button v-on:click="hasError = !hasError">toggle2</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(true);

    //true인 경우 클래스가 생김
    // const classObject = reactive({ active: isActive, 'text-danger': hasError });
    const classObject = computed(() => {
      return { active: true, 'text-danger': true, 'text-blue': true };
    });

    const activeClass = ref('Active');
    const errorClass = ref('error');

    const toggle = () => {
      return (isActive.value = !isActive.value);
    };
    return { isActive, toggle, hasError, classObject, activeClass, errorClass };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}

.text-danger {
  color: red;
}
</style>
