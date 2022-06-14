import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import store from "./store/index"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store).use(router).mount('#app')

