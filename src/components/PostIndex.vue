<template>
  <main>
    <div class="container py-4">
      <PostCreate @create-post="createPost" />

      <hr class="my-4" />
      <div class="row g-1">
        <div class="col col-4">
          <PostItem title="제목" contents="내용1" type="news" />
        </div>
        <!--<div class="col col-4">
          <PostItem
            :title="post.title"
            :contents="post.contents"
            :is-like="post.isLike"
            :type="post.type"
          />
        </div>-->
        <div v-for="post in posts" :key="post.id" class="col col-4">
          <PostItem
            :title="post.title"
            :contents="post.contents"
            :is-like="post.isLike"
            :type="post.type"
            @toggle-like="post.isLike = !post.isLike"
            :obj="obj"
          />

          <!--상위 컴포넌트에서는 prop값을 변경할 수 있다-->
          <!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
        </div>
      </div>
      <hr class="my-4" />

      <!-- :modelValue="username"
        @update:model-value="value => (username = value)" -->
      <LabelInput
        v-model="username"
        label="이름"
        class="parent-class"
        style="color: red"
        id="parent-id"
      />
      <!-- <LabelTitle v-model:title="username" label="제목" />
      <Username v-model:firstname="firstname" v-model:lastname="lastname" /> -->
    </div>
  </main>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/Username.vue';
import { reactive, ref } from 'vue';

export default {
  components: { PostItem, PostCreate, LabelInput },
  setup() {
    const obj = reactive({
      title: '제목2',
      contents: '내용2',
      isLike: true,
      type: 'news',
    });

    const posts = reactive([
      { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
      { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
      { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
      {
        id: 4,
        title: '제목4',
        contents: '내용4',
        isLike: false,
        type: 'notice',
      },
      {
        id: 5,
        title: '제목5',
        contents: '내용5',
        isLike: false,
        type: 'notice',
      },
    ]);

    //자식 컴포넌트에서 보낸 파라미터를 받음
    const createPost = newPost => {
      console.log('newPost', newPost);
      posts.push(newPost);
    };

    const username = ref('');

    const firstname = ref('');
    const lastname = ref('');

    return { obj, posts, createPost, username, firstname, lastname };
  },
};
</script>

<style lang="scss" scoped></style>
