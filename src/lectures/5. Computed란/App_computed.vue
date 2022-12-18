<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!--코드가 더러워질수 있음-->
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p>
    <button v-on:click="count++">Counter : {{ count }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
    <p>{{ fullName2 }}</p>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    const teacher = reactive({
      name: '짐코딩',
      lectures: ['HTML/CSS', 'Javascript', 'Vue3'],
    });

    const hasLecture = computed(() => {
      console.log('computed');
      return teacher.lectures.length > 0 ? '있음' : '없음';
    });

    const existLecture = () => {
      console.log('method');
      return teacher.lectures.length > 0 ? '있음' : '없음';
    };

    //computed와 일반 메서드와 결과는 같음
    //하지만,computed는 캐시화가 되어 여러번 반복 호출될 경우 한번만 생성되는 반면에
    //일반 메서드는 계속해서 호출될때마다 생성됨

    //반응형 데이터가 변경되는 시점에 computed는 갱신이 됨
    //computed는 기본적으로 읽기 전용이지만, 값 변경이 필요한 경우 get(), set()으로 가능

    const count = ref(0);

    const firstName = ref('홍');
    const lastName = ref('길동');

    const fullName = computed(() => firstName.value + ' ' + lastName.value);
    console.log('Console 출력 : ', fullName.value);
    //readOnly 경고창이 나옴
    fullName.value = '짐 코딩';

    const fullName2 = computed({
      get() {
        return firstName.value + ' ' + lastName.value;
      },
      set(value) {
        console.log('value :', value);
        console.log(value.split(' '));
        [firstName.value, lastName.value] = value.split(' ');
      },
    });

    fullName2.value = '짐 코딩';

    console.log('Console 출력 : ', fullName2.value);

    return { teacher, hasLecture, existLecture, count, fullName, fullName2 };
  },
};
</script>

<style lang="scss" scoped></style>
