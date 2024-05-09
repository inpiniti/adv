<script setup lang="ts">
const props = defineProps<{
  _work: IWork;
}>();

function onClickWork() {
  work().value = work().value = props._work;
}
</script>
<template>
  <Card @click="onClickWork">
    <div class="p-2 text-xs flex flex-col gap-1" v-if="_work">
      <div class="flex gap-2">
        <Badge>
          {{ WORK_ITEM[_work?.work_item as keyof typeof WORK_ITEM] }}
        </Badge>
        <div class="text-sm font-bold">{{ _work?.work_name }}</div>
      </div>
      <div class="flex gap-4">
        <div class="flex gap-1">
          <div class="text-neutral-400">고객</div>
          <div>{{ _work?.customer_name }}</div>
        </div>
        <div class="flex gap-1">
          <div class="text-neutral-400">연락처</div>
          <div>{{ _work?.customer_phone }}</div>
        </div>
      </div>
      <div class="text-neutral-400">
        {{ _work?.work_registration_date }} ~ {{ _work?.deadline }}
      </div>
    </div>
  </Card>
</template>
