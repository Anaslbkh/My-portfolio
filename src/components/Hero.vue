<template>
  <section class="row">
    <div class="pic col-ms-12 col-md-6 col-lg-3">
      <p v-scrollanimation>ANASS LEBKHAITI</p>
      <p v-scrollanimation v-if="!burgerCliked" @click="changeShow()">
        <i class="fas fa-bars"></i>
      </p>
      <p v-scrollanimation v-else @click="changeShow()">X</p>
    </div>
    <section class="row hero">
      <div class="col">
        <div class="row right-side">
          <div v-scrollanimation class="desc col-sm-12 col-lg-6">
            <p v-scrollanimation>I'm anass.</p>
            <p v-scrollanimation>
              web developer helps creatives <br />
              to bring their ideas to life.
            </p>
            <a v-scrollanimation href="#contact">HIRE ME</a>
          </div>
          <div class="theimg col-sm-12 col-lg-6">
            <img v-scrollanimation src="@/assets/svgsite.svg" alt="" />
          </div>
        </div>
      </div>
      <!--:class="show || widthSize > 990 ? 'show' : ''"-->
      <transition name="slide-fade">
        <div
          v-scrollanimation
          v-if="show || widthSize > 990"
          class="menu col-sm-12 col-lg-4 col-xxl-3"
        >
          <ul>
            <li v-scrollanimation><a href="#">HOME</a></li>
            <li v-scrollanimation><a href="#about">ABOUT</a></li>
            <li v-scrollanimation><a href="#skills">SKILLS</a></li>
            <li v-scrollanimation><a href="#projects">WORK</a></li>
            <li v-scrollanimation><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </transition>
    </section>
  </section>

  <!--<p v-scrollanimation></p>
    <h3 v-scrollanimation></h3>-->
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      burgerCliked: false,
      widthSize: screen.width,
      show: false,
    };
  },
  //responsive nav
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    widthSize() {
      if (this.widthSize < 990 && this.burgerCliked === true) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    burgerCliked() {
      //check if the user clicked the burger icon
      if (this.widthSize < 990 && this.burgerCliked === true) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  methods: {
    handleResize() {
      //get the width of the user device
      this.widthSize = window.innerWidth;
    },
    changeShow() {
      this.burgerCliked = !this.burgerCliked;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/assets/style.scss";
.pic {
  @include media-gte-sm {
    position: relative;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 30px 0 0px;
    font-size: 1.4em;
    // background-color: $firstColor;
    background-color: white;
    color: $firstColor;
  }
  @include media-gte-lg {
    margin: 0;
    font-size: 2em;
    padding: 0;
    background-color: $firstColor;
    color: white;
  }
  p {
    cursor: pointer;
    &:first-child {
      border-bottom: 2px solid #4cb887;
      @include animate-scroll(0.5s, 0s, translateX(80px), translateX(0px), 1);
    }
    @include media-gte-lg {
      position: absolute;
      left: 63px;
      top: 40px;
    }
    &:last-child {
      @include media-gte-sm {
        @include animate-scroll(0.5s, 0.2s, translateX(80%), translateX(0), 1);
      }
      @include media-gte-lg {
        display: none;
      }
    }
  }
}
.hero {
  @include media-gte-sm {
    margin: 0;
    position: relative;
  }
  .right-side {
    @include media-gte-sm {
      background-color: $firstColor;
      height: 110vh;
      padding: 0;
      position: relative;
    }
    @include media-gte-lg {
      padding-left: 50px;
    }
    .desc {
      @include media-gte-sm {
        @include animate-scroll(
          0.6s,
          0.1s,
          translateX(-100%),
          translateX(0),
          1
        );
        margin-top: -60px;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        font-weight: lighter;
        z-index: 5;
        padding: 0rem 2rem;
        font-size: 2em;
        line-height: 1.5;
        text-align: start;
      }
      @include media-gte-lg {
        font-size: 2.5em;
        text-align: left;
        padding: 0;
        margin: 0;
      }
      * {
        @include media-gte-sm {
          margin-bottom: 0;
          /* white-space: nowrap; */
          z-index: 100;
          display: block;
          @include animate-scroll(
            0.8s,
            0.3s,
            translateY(-80%),
            translateY(0%),
            1
          );
        }
      }
      a {
        @include media-gte-sm {
          all: unset;
          width: fit-content;
          background-color: aliceblue;
          padding: 10px 40px;
          border-radius: 10px;
          /* border: 2px solid #165079; */
          box-sizing: border-box;
          margin-top: 10px;
          font-size: 40px;
          font-weight: 600;
          letter-spacing: 0.1em;
          /* opacity: 0.5; */
          color: $firstColor;
          white-space: nowrap;
          cursor: pointer;
        }
      }
    }
    .theimg {
      @include media-gte-sm {
        display: flex;
        justify-content: center;
        position: absolute;
        opacity: 0.1;
        top: 100px;
        left: 20px;
      }
      @include media-gte-lg {
        opacity: 1;
        position: relative;
      }
      img {
        width: 100%;
        @include animate-scroll(0.6s, 0.1s, scale(0.2), scale(1), 1);
      }
    }
  }
}
.menu {
  @include media-gte-sm {
    transition: all 0.4s ease;
    background-color: #fff;
    height: 110vh;
    padding-top: 5rem;
    z-index: 20;
    position: absolute;
    top: -80px;
    left: 0;
    z-index: 11;
  }
  @include media-gte-lg {
    position: relative;
    z-index: 2;
    top: 0px;
    padding-top: 2rem;
    @include animate-scroll(0.8s, 0.3s, translateY(-80%), translateY(0%), 1);
  }
  ul {
    @include media-gte-sm {
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 70%;
      justify-content: space-between;
      font-size: 48px;
    }
    li {
      display: inline-block;
      margin: 0 25%;
      transition: all 0.5s ease-in-out;
      overflow: hidden;
      @include media-gte-lg {
        width: fit-content;
      }
      @include animate-scroll(0.4s, 0.5s, translateX(-80px), translateX(0), 1);
      a {
        color: $firstColor;
        text-decoration: none;
        font-weight: 700;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #4cb887;
          transform: translateX(-100%);
          transition: all 0.5s ease-in-out;
        }
        &:hover::after {
          transform: translateX(0);
          transform: scale(1.2);
        }
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.97, 0.3, 0.06, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-80px);
  opacity: 005;
}
/*.show {
  display: block;
}*/
</style>
