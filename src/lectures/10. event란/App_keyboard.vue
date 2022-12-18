<template>
  <div>
    <input type="text" @keyup.ctrl.enter="addtodo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const todos = reactive([]);

    const addtodo = event => {
      todos.push(event.target.value);
    };

    return { todos, addtodo };
  },
};
</script>

<style lang="scss" scoped></style>
