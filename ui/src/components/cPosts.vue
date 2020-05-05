
<template>
  <div class="view">
    <h1>Blog Posts</h1>
    <div class="blog-post">HELOO</div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "posts",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    //this.getPosts();
  },
  methods: {
    // async getPosts() {
    //   const response = await PostsService.fetchPosts();
    //   this.posts = response.data;
    // }
  }
};
</script>