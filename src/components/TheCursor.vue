<template>
  <div class="cursor">
    <span class="circle"></span>
  </div>
</template>
<script>
import { onMounted, onUnmounted } from "vue";
export default {
  setup() {
    function handleCursor(e) {
      let dd = document.querySelector(".cursor");
      dd.style.top = e.pageY + "px";
      dd.style.left = e.pageX + "px";
    }
    onMounted(() => {
      window.addEventListener("mousemove", handleCursor);
    });
    onUnmounted(() => {
      window.removeEventListener("mousemove", handleCursor);
    });
  },
};
</script>
<style lang="scss" scoped>
.cursor {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 2px solid #59bd8f;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
  pointer-events: none;
  cursor: none;
}
</style>