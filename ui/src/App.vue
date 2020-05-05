<template>
  <div id="app">
    <cNav />
    <router-view />
    <cFooter />
  </div>
</template>
<script>
import cNav from "@/components/common/cNav";
import cFooter from "@/components/common/cFooter";

export default {
  components: {
    cNav,
    cFooter
  }
};
</script>
