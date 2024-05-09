<script setup lang="ts">
onMounted(async () => {
  works().value = await useWork().get();
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
