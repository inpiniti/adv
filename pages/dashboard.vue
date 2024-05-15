<script setup lang="ts">
const loading = ref(false);

const _work = work();

async function onClickDelete() {
  loading.value = true;
  await useWork().del(work().value);
  works().value = await useWork().get();
  loading.value = false;
}
</script>
<template>
  <div class="p-4 flex flex-col gap-4">
    <div>
      <h3 class="text-lg font-bold">대시보드</h3>
      <p class="text-sm text-muted-foreground">
        작업 현황을 한눈에 볼 수 있습니다.
      </p>
    </div>
    <Separator />
    <div class="flex gap-4 items-center">
      <Card class="p-4 bg-neutral-100">주문</Card>
      <div>></div>
      <Card class="p-4">시안</Card>
      <div>></div>
      <Card class="p-4">고객 컴펌</Card>
      <div>></div>
      <Card class="p-4">제작</Card>
      <div>></div>
      <Card class="p-4">배송 or 설치</Card>
      <div>></div>
      <Card class="p-4">입금</Card>
    </div>
    <Separator />
    <div class="flex flex-col gap-3" v-if="_work">
      <div class="grid w-full items-center gap-1.5">
        <Label>제목</Label>
        <Input v-model="_work.work_name" type="type" readonly />
      </div>
      <div class="grid w-full items-center gap-1.5">
        <Label>품목</Label>
        <Input
          v-model="WORK_ITEM[_work?.work_item as keyof typeof WORK_ITEM]"
          type="type"
          readonly
        />
      </div>
      <div class="grid w-full items-center gap-1.5">
        <Label>사이즈</Label>
        <div class="flex gap-4 items-center">
          <Input v-model="_work.work_size" type="type" readonly />
          <div class="text-neutral-400">x</div>
          <Input v-model="_work.work_width" type="type" readonly />
        </div>
      </div>
      <div class="grid w-full items-center gap-1.5">
        <Label>수량</Label>
        <Input v-model="_work.work_quantity" type="type" readonly />
      </div>
      <div class="grid w-full items-center gap-1.5">
        <Label>내용</Label>
        <Input
          v-model="_work.work_description"
          type="type"
          placeholder="내용"
        />
      </div>
    </div>
    <Separator />
    <div>
      <AlertDialog>
        <AlertDialogTrigger as-child>
          <Button variant="destructive" v-if="loading"> loading... </Button>
          <Button variant="destructive" v-else> 주문 삭제 </Button>
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
            <AlertDialogAction @click="onClickDelete">네</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
</template>
