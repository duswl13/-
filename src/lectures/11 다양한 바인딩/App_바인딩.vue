<template>
  <div>
    <h2>input Value</h2>
    <!-- 값을 자동으로 바인딩 해준다.-->
    <!-- <input type="text" v-model="inputValue" /> -->
    <!-- 값 입력이 끝난 이후에 바인딩-->
    <!-- <input type="text" v-model.lazy="inputValue" /> -->

    <!--문자에서 숫자만 들어올 경우 변환-->
    <!-- <input type="text" v-model.number="inputValue" /> -->

    <!--앞뒤 공백 제거-->
    <input type="text" v-model.trim="inputValue" />
    <!--:value="inputValue"  @input="event => (inputValue = event.target.value)" -->
    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>
    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>

    <!--  :value="textareaValue"
          @input="event => (textareaValue = event.target.value)"
    -->
    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input
      type="checkbox"
      id="checkbox"
      v-model="checkboxValue"
      true-value="Yes"
      false-value="No"
    />
    <!--  :checked="checkboxValue"
      @change="event => (checkboxValue = event.target.checked)" -->

    <h2>radio value</h2>
    <label for="radio">
      <input
        type="radio"
        name="type"
        value="O"
        v-model="radioValue"
      />O형</label
    >
    <label for="radio"
      ><input
        type="radio"
        name="type"
        value="A"
        v-model="radioValue"
      />A형</label
    >
    <!--
        :checked="radioValue === 'O'"
        @change="event => (radioValue = event.target.value)"

    -->
    <div>{{ radioValue }}</div>

    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="html">html 수업</option>
      <option value="css">css 수업</option>
      <option value="javascript">javascript 수업</option>
    </select>

    <div>{{ selectValue }}</div>

    <h2>checkbox valeus</h2>
    <label for="checkbox">
      <input type="checkbox" value="html" v-model="checkboxValues" />
      HTML
    </label>
    <label for="checkbox">
      <input type="checkbox" value="css" v-model="checkboxValues" />
      CSS
    </label>
    <label for="checkbox">
      <input type="checkbox" value="javascript" v-model="checkboxValues" />
      Javascript
    </label>
    <div>{{ checkboxValues }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const inputValue = ref('');
    const textareaValue = ref('');
    const checkboxValue = ref('Yes');
    const checkboxValues = ref([]);
    const radioValue = ref('O');
    const selectValue = ref('html');

    return {
      inputValue,
      textareaValue,
      checkboxValue,
      radioValue,
      selectValue,
      checkboxValues,
    };
  },
};
</script>

<style lang="scss" scoped></style>
