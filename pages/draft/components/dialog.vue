<script setup>
// handleFileInput can handle multiple files
const { handleFileInput, files } = useFileStorage();

const submit = async () => {
  save();
  onRefresh();
  open.value = false;
};

async function save() {
  const _work = work().value;

  const response = await $fetch("/api/draft", {
    method: "POST",
    body: {
      work_id: _work.id,
      files: files.value,
    },
  });
}

async function onRefresh() {
  const _drafts = drafts();
  _drafts.value = await useDraft().get();
}

const open = ref(false);
</script>
<template>
  <Dialog :open="open" @update:open="(arg) => (open = arg)">
    <DialogTrigger>
      <Button>시안 등록</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>시안 등록</DialogTitle>
        <DialogDescription class="flex flex-col gap-4">
          <div>
            시안 이미지를 업로드 하여주세요. (jpg, png, gif, bmp, svg, webp 등)
          </div>
          <Input type="file" @input="handleFileInput" />
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button @click="submit"> 시안 등록</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
