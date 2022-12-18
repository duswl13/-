<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo,
      culpa quaerat tenetur soluta quia repudiandae dignissimos eaque quod.
      Aperiam reprehenderit, excepturi adipisci facilis error vitae tempora ab
      perferendis nulla.
    </div>
    <button v-on:click="fontSize++">+</button>
    <button v-on:click="fontSize--">-</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
  setup() {
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px',
    // });

    const styleObject = computed(() => {
      return { color: 'blue', fontSize: fontSize.value + 'px' };
    });

    const fontSize = ref(13);
    return { styleObject, fontSize };
  },
};
</script>

<style lang="scss" scoped></style>
