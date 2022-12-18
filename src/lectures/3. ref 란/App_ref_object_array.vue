<template>
  <div></div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    // ref -> Object
    const count = ref(0);
    const state = reactive({
      count: count,
    });

    count.value++;
    console.log(count.value);
    console.log(state.count);

    //ref -> Array
    const Message = ref('Hello');
    const arr = reactive([Message]);

    console.log(Message.value);
    console.log(arr[0].value);

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
