<template>
    <div class="bg-gray-100 flex flex-col min-h-screen">
      <NavBar />
      <MainContent />
      <FooterBar />
    </div>
  </template>

  <script>
  import NavBar from "../components/NavBar.vue";
  import MainContent from "../components/MainContent.vue";
  import FooterBar from "../components/FooterBar.vue";

  export default {
    components: {
      NavBar,
      MainContent,
      FooterBar,
    },
  };
  </script>
