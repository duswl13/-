<template>
  <div class="container py-4">
    <input type="text" ref="input" />
    <p>{{ input }}</p>
    <p v-if="input">
      {{ input.value }}, {{ $refs.input.value }}
      {{ $refs.input === input }}
    </p>
    <hr />
    <ul>
      <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">
        {{ fruit }}
      </li> -->
      <li
        v-for="fruit in fruits"
        :key="fruit"
        :ref="
          el => {
            itemRefs.push(el.textContent);
          }
        "
      >
        {{ fruit }}
      </li>
    </ul>
    <hr />
    <!--자식 컴포넌트에 대한 변수에도 접근 가능 -->
    <TemplateRefsChild ref="child"></TemplateRefsChild>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
  components: { TemplateRefsChild },
  setup() {
    //ref 사용법
    //1) <input type="text" ref="input" /> 선언
    //2) const input = ref(''); 같은 이름의 반응형 변수 선언
    //3) onMounted 후에 변수 연동

    const input = ref('');
    console.log('onMounted :', input.value);

    onMounted(() => {
      input.value.value = 'Hello World!';
      console.log('onMounted :', input.value);

      // itemRefs.value.forEach(item => console.log('item :', item.textContent));
      //함수로도 사용 가능
      itemRefs.value.forEach(item => console.log('item :', item));

      //자식 컴포넌트에 대한 변수에도 접근 가능
      console.log('child.message', child.value.message);
      child.value.sayHello();
    });

    const fruits = ref(['사과', '딸기', '포도']);
    const itemRefs = ref([]);

    //자식 컴포넌트에 대한 변수에도 접근 가능
    const child = ref(null);
    return { input, fruits, itemRefs, child };
  },
};
</script>

<style lang="scss" scoped></style>
