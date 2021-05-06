<template>
  <div class="waves">
    <img src="@/assets/svgwaves.png" alt="" />
  </div>
  <section id="about" class="about">
    <div class="top">
      <h1 v-scrollanimation>ABOUT ME</h1>
      <p v-scrollanimation>HOPE TO KNOW YOU AFTER</p>
      <img v-scrollanimation src="../assets/me.png" alt="my picture" />
    </div>
    <div class="row mydescrition">
      <div v-scrollanimation class="introducing col-sm-12 col-lg-6">
        <h4>WHO AM I ?</h4>
        <p>
          I'm anass lebkhaiti Full-Stack Developer, 22 years old. I have a
          Licence BAC+2 in IT.<br />
          IT is not only my professional background. It is also and above all a
          passion that has grown since I was 17 years old. I always liked to get
          into challenging projects or using skills that I did not have or were
          even spare pure programming like web design, This allowed me to learn
          to be autonomous and to learn on my own, certainly not without
          difficulties far from it, but I always managed to overcome the
          obstacles and solve the problems I encountered!
        </p>
      </div>
      <div v-scrollanimation class="contactinfo col-sm-12 col-lg-6">
        <p><span>E-mail:</span>anaslebkhaiti@gmail.com</p>
        <p><span>Phone:</span>+212 611 089 562</p>
        <p><span>City:</span>El jadida, Morocco</p>
        <p><span>Languages:</span>English, Arabic, French</p>
        <socialmedia />
      </div>
    </div>
  </section>
  <div class="waves waves-bottom">
    <img src="@/assets/svgwaves.png" alt="" />
  </div>
</template>
<script>
import socialmedia from "./socialmedia.vue";
export default {
  name: "about",
  components: { socialmedia },
  methods: {},
};
</script>
<style lang="scss" scoped >
@import "@/assets/style.scss";
.about {
  @include media-gte-sm {
    @include section-style(white, 0, 0);
    color: $firstColor;
  }
  @include media-gte-lg {
    @include section-style(white, 10, 0);
  }
  .top {
    * {
      padding: 20px 0px;
    }
    h1 {
      @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
      @include style-headlines(0);
    }
    p {
      @include media-gte-sm {
        position: relative;
        font-size: 24px;
        font-weight: lighter;
        width: 80%;
        text-align: center;
        margin: auto;
        @include animate-scroll(0.5s, 0s, translateX(80px), translateX(0px), 1);
      }
      @include media-gte-lg {
        width: fit-content;
        font-size: 32px;
      }
      &::after {
        @include media-gte-sm {
          content: " ";
          position: absolute;
          width: 100%;
          height: 0px;
          left: 0;
          background-color: #32668b;
          bottom: 5px;
          border: 1px solid #32668b;
          opacity: 0.7;
        }
      }
    }

    img {
      @include media-gte-sm {
        width: 300px;
        padding: 0;
        margin: 40px 0;
        border: 5px solid #32668b;
        background: linear-gradient(
          198deg,
          rgba(0, 64, 121, 1) 69%,
          rgba(0, 0, 0, 1) 100%
        );
        border-radius: 50%;
        @include animate-scroll(0.7s, 0.3s, scale(0.1), scale(1), 1);
      }
    }
  }

  .mydescrition {
    @include media-gte-sm {
      padding-top: 10px;
      padding-bottom: 100px;
      text-align: start;
    }
    @include media-gte-lg {
      padding-top: 100px;
    }
    .introducing {
      @include animate-scroll(0.6s, 0.4s, translateX(-80%), translateX(0), 1);
      position: relative;
      padding-right: 30px;

      h4 {
        font-size: 2em;
        padding-bottom: 20px;
      }

      &::after {
        @include media-gte-sm {
          content: "";
          position: absolute;
          width: 80%;
          height: 2px;
          right: 12%;
          bottom: 0;
          background: #4cb887;
        }
        @include media-gte-lg {
          width: 2px;
          height: 100%;
          right: 0;
          top: 0;
        }
      }

      p {
        line-height: 1.5;
        font-size: 1.5em;
        font-weight: initial;
        opacity: 0.8;
      }
    }
    > * {
      @include media-gte-sm {
        padding-left: 30px;
      }
      @include media-gte-lg {
        padding-left: 62px;
      }
    }
    .contactinfo {
      padding-top: 34px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      @include animate-scroll(0.5s, 0.3s, translateX(80%), translateX(0), 0.8);
      p {
        width: 50%;
        min-inline-size: max-content;
        span,
        a {
          font-size: 1.5em;
          padding-right: 10px;
        }
      }
    }
  }
}
</style>