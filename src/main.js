import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router/index";
import ContainerVue from "./layout/Container.vue";
const app = createApp(App);

app.component("ContainerVue", ContainerVue);

app.use(router);
app.mount("#app");
