<template>
  <section id="skills" class="skills row">
    <h1 v-scrollanimation>SKILLS</h1>
    <div
      class="myskills col-sm-6 col-md-2"
      v-for="skill in state.skills"
      :key="skill"
    >
      <img
        v-scrollanimation
        :src="require(`../assets/${skill}.png`)"
        loading="lazy"
        :alt="skill"
      />
      <p v-scrollanimation>{{ skill.toUpperCase() }}</p>
    </div>
  </section>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const state = reactive({
      skills: [
        "html5",
        "css3",
        "javascript",
        "vuejs",
        "node.js",
        "jquery",
        "sass",
        "bootstrap",
        "git & github",
        "firebase",
        "php",
        "mongodb",
        "sql",
      ],
    });

    return { state };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";

.skills {
  @include section-style($firstColor, 25, 0);
  h1,
  .myskills {
    padding: 20px 62px;
    place-items: center;
  }
  h1 {
    @include style-headlines(50);
    @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
  }
  .myskills {
    @include media-gte-sm {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 10px;
      animation: 4s pulse-animation ease-in-out infinite;
    }
    @include media-gte-lg {
      padding-bottom: 50px;
    }
    &:last-child {
      margin: auto;
    }
    img {
      width: 80px;
      margin-top: auto;
      margin-bottom: auto;
      @include animate-scroll(
        0.3s,
        0.2s,
        translateY(100px),
        translateY(0px),
        1
      );
      p {
        margin-top: 1rem;
        font-size: 1.2em;
      }
    }
  }
}
</style>
