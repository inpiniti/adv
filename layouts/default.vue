<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
const showDetail = ref(false); // 상세를 표시할지 여부를 결정하는 변수
const isMobile = ref(false); // 화면이 모바일 크기인지 결정하는 변수

onMounted(() => {
  // Component is mounted and window is available
  isMobile.value = window.innerWidth <= 640;

  // 화면 크기가 변경될 때마다 isMobile 변수를 업데이트
  window.addEventListener("resize", () => {
    console.log("resize");
    console.log(window.innerWidth);
    isMobile.value = window.innerWidth <= 640;
    console.log(isMobile.value);
  });
});

// 모바일 화면에서만 showDetail 변수를 사용하도록 computed 속성을 생성
const showDetailOnMobile = computed(() => isMobile.value && showDetail.value);
</script>
<template>
  <div class="w-screen h-screen overflow-hidden flex">
    <div class="lg:shrink-0 lg:w-56 w-full flex flex-col" v-show="!showDetailOnMobile">
      <div class="shrink-0">
        <LayoutHeader />
      </div>
      <Separator />
      <ScrollArea class="grow-[0]">
        <LayoutNav />
      </ScrollArea>
    </div>
    <Separator class="hidden lg:block" orientation="vertical" />
    <div class="lg:grow-[0] lg:w-full lg:flex flex-col" v-show="showDetailOnMobile">
      <div class="shrink-0">
        <LayoutSection />
      </div>
      <Separator />
      <ScrollArea class="grow-[0] bg-neutral-50 h-full">
        <slot />
      </ScrollArea>
    </div>
  </div>
</template>
