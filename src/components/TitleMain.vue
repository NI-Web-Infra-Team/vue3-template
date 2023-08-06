<template>
  <div>
    <h2>{{ t('hello') }} Vue3</h2>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<style></style>
