<template>
    <div class="bg-gray-100 flex flex-col min-h-screen">
      <MainContent />
      <FooterBar />
    </div>
  </template>

  <script>
  import MainContent from "../components/MainContent.vue";
  import FooterBar from "../components/FooterBar.vue";

export default {
  components: {
    MainContent,
    FooterBar,
  },
  
};  

</script>
