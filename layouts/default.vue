<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  // Component is mounted and window is available
  useMobile().value = window.innerWidth <= 640;

  // 화면 크기가 변경될 때마다 isMobile 변수를 업데이트
  window.addEventListener("resize", () => {
    useMobile().value = window.innerWidth <= 640;
  });

  isLoading.value = false;
});

// 모바일 화면에서만 showDetail 변수를 사용하도록 computed 속성을 생성
const showMenuOnMobile = computed(() => !useMobile().value || !useShowDetail().value);
const showDetailOnMobile = computed(() => !useMobile().value || useShowDetail().value);
</script>
<template>
  <div v-if="isLoading" class="w-svw h-svh flex items-center justify-center bg-neutral-50">로딩 중...</div>
  <div class="w-screen h-svh overflow-hidden flex" v-else>
    <div class="lg:shrink-0 lg:w-56 w-full flex flex-col" v-if="showMenuOnMobile">
      <div class="shrink-0">
        <LayoutHeader />
      </div>
      <Separator />
      <ScrollArea class="grow-[0]">
        <LayoutNav />
      </ScrollArea>
    </div>
    <Separator class="hidden lg:block" orientation="vertical" />
    <div class="lg:grow-[0] lg:w-full lg:flex flex flex-col" v-if="showDetailOnMobile">
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
