<script setup lang="ts">
const _drafts = drafts();

watch(
  () => [work().value],
  () => {
    onRefresh();
  },
  { deep: true }
);

// 다시조회
async function onRefresh() {
  drafts().value = await useDraft().get();
}

// 선택하기
function onSelect(draft: IDraft) {
  drafts().value.forEach((d) => {
    d.selected = false;
  });
  draft.selected = !draft.selected;
}
</script>
<template>
  <div class="p-4 flex flex-col gap-4 overflow-hidden">
    <div>
      <h1 class="text-lg font-bold">고객 컴펌</h1>
      <p class="text-sm text-muted-foreground">출력할 시안을 지정합니다.</p>
    </div>
    <div v-for="draft in _drafts" :key="draft.draft_id">
      <Card class="h-44 w-fit relative cursor-pointer" @click="onSelect(draft)">
        <div class="absolute w-full h-full border-4 border-neutral-600 rounded-md" v-if="draft.selected"></div>
        <div class="absolute w-full h-full bg-black bg-opacity-20 hover:bg-opacity-0 rounded-md" v-else />
        <img class="rounded-lg h-44" :src="draft.draft_image_path" alt="draft" />
      </Card>
    </div>
  </div>
</template>
