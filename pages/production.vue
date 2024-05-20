<script setup lang="ts">
const production = ref([]);
</script>
<template>
  <div class="flex flex-col gap-4 p-4">
    <div>
      <h1 class="text-lg font-bold">제작</h1>
      <p class="text-sm text-muted-foreground">제작중인 사진 등록 및 상태 변경을 할 수 있습니다.</p>
    </div>
    <div class="flex gap-1 items-center">
      <Card class="px-2 py-1">진행전</Card>
      <div>＞</div>
      <Card class="px-2 py-1">제작중</Card>
      <div>＞</div>
      <Card class="px-2 py-1">제작완료</Card>
    </div>
  </div>
</template>
