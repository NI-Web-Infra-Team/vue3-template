import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import type { I18nOptions, I18n } from 'vue-i18n'
import defaultMessages from '@/locales/zh-CN'

export const FALLBACK_LOCALE = 'zh-CN'

export const DEFAULT_LOCALE =
  __SUPPORT_LOCALES__.find((lang) => lang === navigator.language) ?? __SUPPORT_LOCALES__[0]

export const i18n = setupI18n({
  legacy: false,
  fallbackLocale: FALLBACK_LOCALE,
  locale: DEFAULT_LOCALE,
  messages: {
    [FALLBACK_LOCALE]: defaultMessages
  }
})

export const asyncLocales = import.meta.glob('@/locales/**/index.ts')

/**
 *
 * @param {I18nOptions} options - i18n options
 * @returns {ReturnType<typeof createI18n>} - i18n instance
 */
export function setupI18n(options: I18nOptions) {
  const i18n = createI18n(options)
  setI18nLanguage(i18n, options.locale)
  return i18n
}

/**
 *
 * @param {I18n} i18n - i18n instance
 * @param {string} locale - locale
 */
export function setI18nLanguage(i18n: I18n, locale: string) {
  i18n.global.locale.value = locale
  document.querySelector('html')!.setAttribute('lang', locale)
}

/**
 *
 * @param {I18n} i18n - i18n instance
 * @param {string} locale - locale
 * @returns {Promise<void>} - promise
 */
export async function loadLocaleMessages(i18n: I18n, locale: string) {
  // load locale messages with dynamic import
  const messages = await asyncLocales[`/src/locales/${locale}/index.ts`]()

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, (messages as any).default)

  return nextTick()
}
