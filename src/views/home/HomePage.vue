<template>
  <div class="home">
    <p>
      {{ t('system.language') }}:
      <select :value="locale" @change="handleChangeLocale">
        <option v-for="l in supportLocales" :value="l" :key="l">{{ l }}</option>
      </select>
    </p>
    <TitleMain></TitleMain>
    <h3>count: {{ count }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import type { Merge } from 'type-fest'
import TitleMain from '@/components/TitleMain.vue'
import useCounter from '@/store/counter'

const counterStore = useCounter()
const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const { count } = storeToRefs(counterStore)
const supportLocales = __SUPPORT_LOCALES__
const locale = computed(() => route.params.locale)

/**
 *
 */
function incrementCount() {
  counterStore.count++
}

/**
 *
 * @param {MouseEvent} opt - The event object
 */
async function handleChangeLocale(opt: Event) {
  // TODO 语言包为异步加载，此处应该添加一个 loading 状态来优化用户体验
  await router.push({
    name: route.name as string,
    params: { locale: (opt as Merge<Event, { target: HTMLSelectElement }>).target.value }
  })
}

setInterval(incrementCount, 1000)
</script>
<style>
.home {
  text-align: center;
}
</style>
