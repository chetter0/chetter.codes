<template>
  <div id="app">
    <cNav />
    <router-view />
  </div>
</template>
<script>
import cNav from "@/components/common/cNav";

export default {
  components: {
    cNav
  }
};
</script>
