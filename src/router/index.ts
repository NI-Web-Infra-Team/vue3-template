import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { FALLBACK_LOCALE, loadLocaleMessages, i18n, setI18nLanguage } from '@/plugins/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/${FALLBACK_LOCALE}`
  },
  {
    path: '/:locale',
    name: 'Home',
    component: () => import('@/views/home/HomePage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes
})

router.beforeEach(async (to, from, next) => {
  const paramsLocale = to.params.locale.toString()

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!__SUPPORT_LOCALES__.includes(paramsLocale)) {
    return next(`/${i18n.global.locale.value}`)
  }

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})

export default router
