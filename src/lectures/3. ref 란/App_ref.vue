<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="addMessage">click</button>
    <hr />
    <p>{{ message2.value }}</p>
    <button v-on:click="addMessage2">click</button>
    <hr />
    <p>{{ message3 }}</p>
    <button v-on:click="addMessage3">click</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { ref } from 'vue';
export default {
  setup() {
    //반응형으로 동작하지 않음
    let message = reactive('Hello vue3!');

    const addMessage = () => {
      //이유는, string을 다시 메모리에 적재하기때문에
      //같은 객체로 보지 않음
      //이 방법을 해결하려면 객체 안에 string 으로 선언해야함
      message += '!';
    };

    console.log('message : ', message);
    console.log('message typeof : ', typeof message);

    let message2 = reactive({ value: 'Hello vue3!' });
    const addMessage2 = () => {
      message2.value += '!';
    };
    //하지만 이렇게 하기엔 너무 번잡스러움
    //때문에 ref 메서드가 생겼음
    //reactive가 객체 타입에 대해서만 반응형취급을 해줬다면,
    //ref는 number, string, boolean 에 대응
    //message = ref(0) 는 message.value 랑 동일한 말임. 그래서 참조한다 라는 뜻임

    let message3 = ref('Hello vue3~');
    const addMessage3 = () => {
      message3.value += '~';
    };

    console.log('message3 : ', message3);

    return {
      message,
      addMessage,
      message2,
      addMessage2,
      message3,
      addMessage3,
    };
  },
};
</script>

<style lang="scss" scoped></style>
