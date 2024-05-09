<script setup lang="ts">
const props = defineProps<{
  _work: IWork;
}>();

function onClickWork() {
  work().value = props._work;
}
</script>
<template>
  <Card @click="onClickWork">
    <div class="p-2" v-if="_work">
      <div class="font-bold">{{ _work?.customer_name }}</div>
      <div>{{ _work?.work_item }}</div>
      <div class="font-bold">상태 : 주문</div>
      <div>{{ _work?.work_registration_date }}</div>
    </div>
  </Card>
</template>
