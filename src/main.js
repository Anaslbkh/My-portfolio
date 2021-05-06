import { createApp } from "vue";
import App from "./App.vue";
import ScrollAnimation from "./directive/scrollanimation";
import "./assets/style.scss";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


const app = createApp(App);
app.directive("scrollanimation", ScrollAnimation);

app.mount("#app");
