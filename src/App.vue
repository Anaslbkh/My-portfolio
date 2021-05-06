<template>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
  <Footer />
  <TheCursor />
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import TheCursor from "./components/TheCursor.vue";
import "./assets/style.scss";
export default {
  name: "App",
  components: {
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
    TheCursor,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
@import "@/assets/style.scss";
body {
  background-color: $thierdColor !important;
}
body::-webkit-scrollbar {
  width: 0.25rem;
}
body::-webkit-scrollbar-track {
  background-color: #1e1e24;
}
body::-webkit-scrollbar-thumb {
  background-color: $secondColor;
}
#app {
  cursor: none;
  font-family: $myFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>