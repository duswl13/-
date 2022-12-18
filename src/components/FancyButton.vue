<template>
  <button class="fancy-btn">
    <slot :fanctMessage="fanctMessage"><span>!!</span>Default click!</slot>
  </button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fanctMessage = ref('Fancy Message');
    return { fanctMessage };
  },
};
</script>

<style scoped>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 12px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
