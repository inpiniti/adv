<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
<template>
  <div class="w-screen h-screen overflow-hidden flex">
    <div class="shrink-0 w-56 flex flex-col">
      <div class="shrink-0">
        <LayoutHeader />
      </div>
      <Separator />
      <ScrollArea class="grow-[0]">
        <LayoutNav />
      </ScrollArea>
    </div>
    <Separator orientation="vertical" />
    <div class="grow-[0] w-full flex flex-col">
      <div class="shrink-0">
        <LayoutSection />
      </div>
      <Separator />
      <ScrollArea class="grow-[0]">
        <slot />
      </ScrollArea>
    </div>
  </div>
</template>
