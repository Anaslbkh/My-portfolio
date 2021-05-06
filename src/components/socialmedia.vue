<template>
  <p>
    <a href="https://www.linkedin.com/in/anass-lebkhaiti-2446b5170/"
      ><i class="fab fa-linkedin-in"></i
    ></a>
    <a href="https://github.com/Anaslbkh"><i class="fab fa-github"></i></a>
    <a href="https://www.instagram.com/anaslebkhaiti/"
      ><i class="fab fa-instagram"></i
    ></a>
  </p>
</template>
<script>
export default {
  name: "socialmedia",
};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";

p {
  display: flex;
  justify-content: center;
  font-size: 2em;
  place-content: start;
  a {
    all: unset;
    color: $firstColor;
    padding: 0 20px 0 0;
    cursor: pointer;
  }
}
</style>
