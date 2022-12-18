<template>
  <div>
    <div id="modifiers">
      <!--capture : span 클릭 시 span > p > div 순으로 진행되던걸 div > p > span 으로 진행한다.-->
      <div @click="clickDiv">
        DIV 영역
        <!-- self : 본인이 클릭했을 경우에만 이벤트가 실행된다. 버블링, 캡쳐 안먹힘-->
        <p @click:self="clickP">
          P 영역
          <!-- <span @click.stop="clickSpan">SPAN 영역</span> -->
          <span @click="clickSpan">SPAN 영역</span>
          <!--prevent : 동시에 실행되는 다른 이벤트를 막는다.-->
          <!--stop : 이벤트 버블링을 막는다.-->
          <a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
        </p>
      </div>
    </div>
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      //location.href = 'https://naver.com';
    };
    const clickP = () => {
      console.log('clickP');
    };
    const clickSpan = () => {
      console.log('clickSpan');
      //alert('좋아요');
    };
    const clickA = () => {
      alert('어떤기능');
    };
    return {
      clickDiv,
      clickP,
      clickSpan,
      clickA,
    };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
