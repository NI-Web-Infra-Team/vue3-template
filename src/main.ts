import { createApp } from 'vue'
import { i18n } from '@/plugins/i18n'
import router from '@/router'
import pinia from '@/store'
import App from '@/App.vue'

import '@/styles/index.scss'

createApp(App).use(i18n).use(router).use(pinia).mount('#app')
