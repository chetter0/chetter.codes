<template>
  <div class="view filled-container">
    <h1>Blog</h1>
    <p>
      Coming Soon! I will be using this section to write about coding, from my observations about things I find on the web, to the struggles I
      face while coding, and comments about mechanisms in my favorite video games.
    </p>
    <h3>TODO:</h3>
    <ul>
      <li>Posts</li>
      <li>About this page needs to be in a better place. Posts should be the central content.</li>
    </ul>
  </div>
</template>
<script>
import cPosts from "@/components/cPosts";
export default {
  components: {
    cPosts
  }
};
</script>
<style scoped>
.chetter-transparent {
  color: rgba(0, 0, 0, 0.5);
}
</style>
