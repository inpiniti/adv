<script setup>
// handleFileInput can handle multiple files
const { handleFileInput, files } = useFileStorage();

const imageUrl = ref(null);

const submit = async () => {
  const response = await $fetch("/api/draft", {
    method: "POST",
    body: {
      files: files.value,
    },
  });

  imageUrl.value = response;
};
</script>
<template>
  <Dialog>
    <DialogTrigger> <Button>시안 등록</Button> </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.

          <input type="file" @input="handleFileInput" />

          <img :src="imageUrl" alt="Uploaded Image" />
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button @click="submit"> Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
