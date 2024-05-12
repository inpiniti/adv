<script setup lang="ts">
import Dialog from "./draft/components/dialog.vue";

const _drafts = drafts();
const _work = work();

onMounted(async () => {
  onRefresh();
});

watch(
  () => [_work.value],
  () => {
    onRefresh();
  },
  { deep: true }
);

// 다시조회
async function onRefresh() {
  _drafts.value = await useDraft().get();
}

function onClick(id: number) {
  const draft = _drafts.value.find((draft: IDraft) => draft.draft_id === id);
  if (draft) {
    draft.selected = !draft.selected as boolean;
  }
}

function onClickDelete() {
  const deletes = _drafts.value.filter(
    (draft: IDraft) => draft.selected == true
  );
  console.log("delete");
}
</script>
<template>
  <div class="p-4 flex flex-col gap-4 overflow-hidden">
    <div>
      <h1 class="text-lg font-bold">시안</h1>
      <p class="text-sm text-muted-foreground">
        시안을 등록하거나 확인할 수 있습니다.
      </p>
    </div>
    <div class="flex gap-4 justify-end">
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="secondary">삭제</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>정말로 삭제하시겠습니까??</AlertDialogTitle>
            <AlertDialogDescription>
              한번 삭제하면 모든 데이터가 삭제되며, 되돌릴수 없습니다.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>아니오</AlertDialogCancel>
            <AlertDialogAction @click="onClickDelete()">네</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Dialog />
    </div>
    <Table class="border rounded-lg border-separate">
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]"> id </TableHead>
          <TableHead>시안</TableHead>
          <TableHead>등록 시간</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="draft in _drafts" :key="draft.draft_id">
          <TableCell class="font-medium border-t">
            <Checkbox id="terms" @click="onClick(draft.draft_id)" />
          </TableCell>
          <TableCell class="border-t">
            <img
              class="rounded-lg h-44"
              :src="draft.draft_image_path"
              alt="draft"
            />
          </TableCell>
          <TableCell class="border-t">{{
            draft.draft_registration_date
          }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
