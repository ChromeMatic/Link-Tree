import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import { createHead} from "@unhead/vue";

import './style.css'
import App from './App.vue'

const app = createApp(App)
const head = createHead()

app.use(MotionPlugin)
app.use(head)
app.mount('#app')