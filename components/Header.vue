<template>
  <h1 class="title">{{ i18n.getMessage('header_title') }} <span class="version">V{{version}}</span></h1>
</template>

<script lang="ts" setup>
import { i18n } from '../entrypoints/utils/i18n';
const version = process.env.VUE_APP_VERSION
</script>

<style scoped>
.title {
  font-size: 1.75em;
  margin: 0.5em 0;
  color: var(--fr-text-color-primary);
  font-weight: 600;
}

.version {
  font-size: 0.5em;
  opacity: 0.8;
}
</style>
