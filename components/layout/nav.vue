<script setup lang="ts">
const _works = works();
</script>
<template>
  <div class="p-2 flex flex-col gap-2">
    <NuxtLink to="/work.post">
      <Card class="p-2 text-sm">+ 주문 등록</Card>
    </NuxtLink>
    <NavWork v-for="_work in _works" :_work="_work" />
  </div>
</template>
