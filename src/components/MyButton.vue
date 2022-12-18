<template>
  <div class="p-3 bg-danger">
    <button class="btn btn-primary" type="button" @click="sayHello">
      My Button
    </button>
    <!--
    부모에서의 이벤트 상속은 첫번째 요소만 가능한데,  
    버튼에 이벤트를 상속하고 싶은 경우 {{$attrs}} 를 사용한다.
    1) <button class="btn btn-primary" v-bind="$attrs" type="button">My Button</button> 
    2) inheritAttrs: false,
    attr 속성은 setup의 두번째 파라미터인 context에 속해있다.

    attr은 부모에서 정의된 속성을 가지고 있다.
  --></div>
</template>

<script>
export default {
  //emits에 명시적으로 선언해놓는게 좋다.
  //선언을 해놓지 않으면,
  //1) 부모 컴포넌트에서 click에 대해 받는다.
  //2) 자식 컴포넌트의 첫번째 요소가 non-prop 요소로 상속받을 수도 있다.
  //그렇게 되면 이벤트가 중복으로 생성이 될 수 있다.
  emits: ['click'],
  //inheritAttrs : 부모 컴포넌트에서 첫번째 자식 컴포넌트로의 클래스, 스타일, 이벤트 등을
  //상속할지의 여부

  //false일 경우 속성 상속을 막는다.
  // inheritAttrs: false,
  setup(props, context) {
    console.log(context.attrs);
    console.log(context.attrs.class);
    console.log(context.attrs.id);
    console.log(context.attrs.onClick);

    //context.attrs.onClick();

    const sayHello = () => {
      context.emit('click');
    };
    return { sayHello };
  },
};
</script>

<style lang="scss" scoped></style>
