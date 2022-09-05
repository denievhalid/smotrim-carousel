import { createApp } from "vue";
import App from "./App.vue";
import { Skeletor } from "vue-skeletor";
import "./style.scss";
import "vue-skeletor/dist/vue-skeletor.css";

createApp(App).component("Skeletor", Skeletor).mount("#app");
