<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
<template>
  <div class="w-screen h-screen overflow-hidden flex">
    <div class="shrink-0 w-56">
      <div>
        <LayoutHeader />
      </div>
      <Separator />
      <div>
        <LayoutNav />
      </div>
    </div>
    <Separator orientation="vertical" />
    <div class="grow-[0]">
      <slot />
    </div>
  </div>
</template>
