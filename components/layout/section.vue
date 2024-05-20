<script setup lang="ts">
const section = useState("section", () => "");

onMounted(() => {
  const newSection = useRoute().path.split("/")[1];
  if (newSection) {
    section.value = newSection;
  }
});
// nuxt 화면 이동
function onClickSection() {
  navigateTo(`/${section.value}`);
}

const onClick = () => {
  useShowDetail().value = false;
  const appConfig = useAppConfig();

  console.log(appConfig);
};

const isMobile = useMobile();
</script>
<template>
  <div class="px-4 py-2 flex justify-between items-center gap-4 w-svw lg:w-full">
    <div class="shrink-0">
      <div class="font-extrabold" @click="onClick" v-if="isMobile">＜</div>
      <div class="font-bold" v-else>작업 현황</div>
    </div>
    <ScrollArea class="grow-[0]">
      <Tabs default-value="dashboard" v-model="section" @click="onClickSection">
        <TabsList>
          <TabsTrigger value="dashboard"> 주문 </TabsTrigger>
          <TabsTrigger value="draft"> 시안 </TabsTrigger>
          <TabsTrigger value="confirmation"> 컴펌 </TabsTrigger>
          <TabsTrigger value="production"> 제작 </TabsTrigger>
          <TabsTrigger value="installation"> 설치 </TabsTrigger>
          <TabsTrigger value="payment"> 입금 </TabsTrigger>
        </TabsList>
      </Tabs>
    </ScrollArea>
  </div>
</template>
