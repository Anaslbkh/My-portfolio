<template>
  <div class="waves">
    <img src="@/assets/svgwaves.png" alt="" />
  </div>
  <section id="projects" class="projects">
    <h1 v-scrollanimation>PROJECTS</h1>
    <div
      v-scrollanimation
      class="project"
      v-for="project in projects"
      :key="project.title"
    >
      <!--  <h3>LET'S TRAVEL MOROCCO</h3>-->
      <div class="detailpro">
        <img :src="project.imgsrc" :alt="project.title" />

        <div class="detail">
          <h3>{{ project.title }}</h3>
          <p>
            <span>{{ project.desc }} </span>
            <a :href="project.link" target="_blank">visit the website</a>, and
            the code source:
            <a :href="project.githublink" target="_blank">github</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="waves waves-bottom">
    <img src="@/assets/svgwaves.png" alt="" />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const projects = ref([
      {
        title: "VACCINE TRACKER",
        imgsrc: require("@/assets/vaccineTracker.png"),
        desc:
          "vaccination tracker, it's a website that tracks the process of covid-19 vaccination with many details(vaccine type, number of vaccinated people in every country...). build by : vue.js - vue router - vuex - sass - vue-chartkick. and API",
        link: "https://vaccine-tracker-covide19.netlify.app/",
        githublink: "https://github.com/Anaslbkh/vaccination-tracker",
      },
      {
        title: "LET'S TRAVEL MOROCCO",
        imgsrc: require("@/assets/letstravel.png"),
        desc:
          "let's travel morocco it's dynamic website about places that desrve to visit in morocco. the posts get add by admin that have email & password.build node.js(express),mongodb, html, css, bootstrap4, openweather api, here api for shwing the location of the destination.",
        link: "https://lets-tavel-morocco.herokuapp.com/",
        githublink: "https://github.com/Anaslbkh/lets-travel",
      },

      {
        title: "MOVIES APP WITH AUTH",
        imgsrc: require("@/assets/movie-app.png"),
        desc:
          "movie app it's a website that provides many options like the recommendation of the day and searches method for movies and tv shows... build by vue.js, sass, the themoviedb API, firebase auth.",
        link: "https://pensive-lumiere-4f1fb7.netlify.app/",
        githublink: "https://github.com/Anaslbkh/movie-app-vuejs",
      },
      {
        title: "REALTIME CHAT",
        imgsrc: require("@/assets/nous-chat.png"),
        desc:
          "nous-chat, a real-time chat app builds with firebase realtime database, firebase hosting and vue.js.",
        link: "https://nous-chat-16022.web.app/",
        githublink: "https://github.com/Anaslbkh/nous-chat/tree/master",
      },
      {
        title: "COUNTRIES API",
        imgsrc: require("@/assets/countries-api.png"),
        desc:
          "countries API is a website that displays countries' details and provides light and dark modes. build by jquery and sass rest-countries API.",
        link: "https://hopeful-murdock-92494f.netlify.app/index.html",
        githublink: "https://github.com/Anaslbkh/Rest-countries-api",
      },
      {
        title: "WEATHER APP",
        imgsrc: require("@/assets/app-weather.png"),
        desc:
          "weather app a website built by vue.js, openweatherapi, get-city API(provides cities of the world) that display the current weather in a city.",
        link: "https://anaslbkh.github.io/weather-by-city-and-location/",
        githublink: "https://github.com/Anaslbkh/weather-by-city-and-location",
      },
    ]);
    console.log();
    return { projects };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/style.scss";
.projects {
  color: $firstColor;
  @include section-style(white, 5, 0);
  .waves {
    margin-top: -40vh;
  }
  h1,
  .project {
    margin: 10px 63px;
  }
  h1 {
    @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
    @include style-headlines(50);
  }
  .project {
    color: $firstColor;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: fit-content;
    margin: 60px 10px;
    font-size: 1.2em;
    @include animate-scroll(0.5s, 0.2s, scale(0.2), scale(1), 1);
    .detailpro {
      border-radius: 10px;

      position: relative;
      &:hover > .detail {
        opacity: 0.9;
        // transform: scale(1);
        pointer-events: all;
        width: 100%;
        height: 100%;
      }
      img {
        @include media-gte-sm {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
        @include media-gte-lg {
          width: 700px;
          height: 400px;
        }
      }
      .detail {
        @include media-gte-sm {
          border-radius: 10px;
          //transition: opacity 1s ease-out;
          transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
          pointer-events: none;
          z-index: 19;
          opacity: 0;
          display: block;
          position: absolute;
          width: 0%;
          height: 100%;
          top: 0;
          left: 0;
          padding: 10px;
          background-color: white;
          text-align: start;
          // transform: scale(0.2);
        }
        @include media-gte-lg {
          padding: 20px;
          padding-top: 100px;
          text-align: center;
        }
        p {
          @include media-gte-sm {
            width: 100%;
            font-weight: lighter;
            width: fit-content;
            height: 100%;
            font-size: 16px;
            font-weight: 300;
          }
          @include media-gte-lg {
            font-size: 1.2em;
          }
          a {
            all: unset;
            cursor: pointer;
            font-weight: normal;
            color: #4cb887;
          }
        }
      }
    }
  }
}
</style>