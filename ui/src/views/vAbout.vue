<template>
  <div class="view filled-container">
    <h1>
      <span class="chetter-transparent">Ch</span>ristie
      <span class="chetter-transparent">Etter</span>
    </h1>
    <p>
      I am a full stack web developer at CODE Consulting. At CODE, I have had the opportunity of working on FoxPro software conversion
      projects and new custom solutions for various business needs such as time management and payroll.
    </p>
    <h3>TODO:</h3>
    <ul>
      <li>Make chetter-transparent show background gradient</li>
    </ul>
  </div>
</template>
<script>
import cSkills from "@/components/about/cSkills";
export default {
  components: {
    cSkills
  }
};
</script>
<style scoped>
.chetter-transparent {
  color: rgba(0, 0, 0, 0.5);
}
</style>
