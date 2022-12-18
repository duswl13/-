<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    /*
    watch(
      () => x.value + y.value,
      (sum, oldValue) => {
        console.log('sum : ', sum);
        console.log('oldValue :', oldValue);
      },
    );*/

    //배열로도 받을 수 있음
    /* watch([x, y], ([newX, newY]) => {
      console.log(newX, newY);
    });*/

    //객체에 대한 변경도 받을 수 있음
    //하지만 newvalue 와 oldValue의 값이 동일함
    //가리키는 메모리가 같기 때문
    /*watch(obj, (newvalue, oldValue) => {
      console.log(newvalue);
    });
    return { x, y, obj };
    */

    //객체 속성 하나에 대한 변경을 알고싶은 경우
    //첫번째 매개변수 자리를 getter 함수로 사용하면 됨
    /*watch(
      () => obj.count,
      (newvalue, oldValue) => {
        console.log(newvalue);
      },
    );*/

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0,
      },
    });

    watch(
      () => person.obj.count,
      newValue => {
        console.log('newValue: ', newValue);
      },
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>
