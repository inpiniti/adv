<script setup lang="ts">
const props = defineProps<{
  _work: IWork;
}>();

function onClickWork() {
  useShowDetail().value = true;
  work().value = work().value = props._work;

  const section = useState("section");
  navigateTo(`/${section.value || "dashboard"}`);
}

const remainingDays = computed(() => {
  if (props._work.deadline) {
    let deadline = new Date(props._work.deadline);
    let today = new Date();
    let diff = deadline.getTime() - today.getTime();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  }
  return 0;
});
</script>
<template>
  <Card @click="onClickWork" class="cursor-pointer" :class="{ 'bg-neutral-100': work().value == props._work }">
    <div class="p-2 text-xs flex flex-col gap-1" v-if="_work">
      <div class="flex justify-between">
        <Badge>
          {{ WORK_ITEM[_work?.work_item as keyof typeof WORK_ITEM] }}
        </Badge>
        <div>{{ remainingDays }}일 남음</div>
      </div>
      <div class="text-sm font-bold">{{ _work?.work_name }}</div>
      <div class="flex gap-3">
        <div class="flex flex-col">
          <div class="text-neutral-400">고객</div>
          <div>{{ _work?.customer_name }}</div>
        </div>
        <div class="flex flex-col">
          <div class="text-neutral-400">연락처</div>
          <div>{{ _work?.customer_phone }}</div>
        </div>
      </div>
      <div class="text-neutral-400">
        {{ _work?.work_registration_date }} ~
        {{ _work?.deadline }}
      </div>
    </div>
  </Card>
</template>
