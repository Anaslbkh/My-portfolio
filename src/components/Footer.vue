<template>
  <footer class="footer">
    <div>
      <span>
        2020 Anass lebkaiti | Get this template
        <a href="https://github.com/Anaslbkh/vue_porfolio" target="_blank"
          >here</a
        >!</span
      >
    </div>
    <socialmedia />
  </footer>
</template>

<script>
import socialmedia from "./socialmedia.vue";
export default {
  name: "Footer",
  components: { socialmedia },
};
</script>

<style scoped lang="scss">
@import "@/assets/style.scss";
.footer {
  @include media-gte-sm {
    padding: 10px 20px 10px 20px;
    background-color: $firstColor + b7;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  @include media-gte-lg {
    flex-direction: row;
  }
}
p {
  margin: 0;
  a {
    @include media-gte-sm {
      padding: 10px;
      font-size: 2em;
    }
    @include media-gte-lg {
      padding: 20px;
    }
  }
}
</style>
