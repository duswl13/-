<template>
  <main>
    <div class="container py-4">
      <!--자식 컴포넌트를 정의할 때 사용되는 style, class등은 
          자식 컴포넌트의 첫번째 엘리먼트에 상속된다.
        <MyButton class="my-button" id="my-button" @click="sayHello"></MyButton>
        -->
      <MyButton class="my-button" id="my-button" @click="sayHello1"></MyButton>
      <LabelInput label="이름" data-id="id입니다."></LabelInput>

      <hr />
      <FancyButton>Click!<span style="color: red">123</span></FancyButton>

      <FancyButton v-slot="{ fanctMessage }">{{ fanctMessage }}</FancyButton>

      <FancyButton>
        <template v-slot="{ fanctMessage }">{{ fanctMessage }}</template>
      </FancyButton>

      <AppCard>
        <!--v-bind,v-on 또한 아래와 같이 #[slotArgs] 동적 할당이 가능하다.-->
        <!--v-slot:footer 를 #default로 줄일수 있으며,-->
        <!--동적 할당은 #[slotArgs] 
        const slotArgs = ref('header');로 가능하다.
        -->
        <!-- <template #[slotArgs]>제목 입니다.</template> -->
        <!-- <template #default>내용 입니다.</template> -->
        <!-- 암시적으로 Default 슬롯입니다. -->
        <!-- v-slot:footer-->
        <!--<template #footer>푸터 입니다.</template>-->

        <template #header="{ headerMessage }">{{ headerMessage }}</template>
        <template #default="{ childMessage, helloMessage }"
          >{{ childMessage }} {{ helloMessage }}디폴트 입니다.{{
            message
          }}</template
        >
        <template #footer="{ footerMessage }">{{ footerMessage }}</template>
      </AppCard>

      <AppCard> 이건 왜 안될까? </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
import { ref } from 'vue';

export default {
  components: { MyButton, LabelInput, FancyButton, AppCard },
  setup() {
    const sayHello1 = () => {
      alert('안녕하세요');
    };
    const slotArgs = ref('header');
    const message = ref('안녕하세요.');
    return { sayHello1, slotArgs, message };
  },
};
</script>

<style lang="scss" scoped></style>
