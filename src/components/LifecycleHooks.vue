<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello world!" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <Lifecyclechild v-if="visible" />
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue';
import Lifecyclechild from './Lifecyclechild.vue';

export default {
  setup() {
    console.log('setup');
    const inputRef = ref(null);
    const message = ref('');
    const visible = ref(false);

    //컴포넌트가 돔에 추가되기 전이므로 돔에 접근 불가능
    //inputRef.value == null
    onBeforeMount(() => console.log('onBeforeMount', inputRef.value));

    //컴포넌트가 돔에 추가되었기때문에 돔에 접근 가능
    //inputRef.value.value == 'hello world!'
    onMounted(() => console.log('onMounted', inputRef.value.value));

    //Dom에 마운트가 된 후 사용
    //업데이트가 되기 전
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', message.value);
      console.log(
        'dom content :',
        document.querySelector('#message').textContent,
      );
    });

    //업데이트가 된 후
    onUpdated(() => console.log('onUpdated'));

    //마운트가 해제되기 전
    onBeforeUnmount();
    //마운트가 해제된 후
    onUnmounted();

    return { inputRef, message, visible };
  },
  components: { Lifecyclechild },
};
</script>

<style lang="scss" scoped></style>
