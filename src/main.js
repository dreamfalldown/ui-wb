import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-theme-dark";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./registerFont";

// 执行时可能有个版本bug
// yarn add tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 --save
const app = createApp(App);
app.use(ElementPlus);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
