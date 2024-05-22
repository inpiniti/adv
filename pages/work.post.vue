<script setup lang="ts">
import { ref } from "vue";
import { toast } from "vue-sonner";

import { DateFormatter, type DateValue, getLocalTimeZone } from "@internationalized/date";

const df = new DateFormatter("ko-KR", {
  dateStyle: "long",
});

const value = ref<DateValue>();
const _work = ref<IWork>(<IWork>{});
const loading = ref(false);

// value 값이 바뀌면 yyyy-mm-dd 로 변환한뒤에, _work.deadline 에 넣어준다.
watch(
  () => value.value,
  () => {
    if (value.value) {
      let date = value.value.toDate(getLocalTimeZone());
      let formattedDate = date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
      _work.value.deadline = formattedDate;
    }
  },
  { deep: true }
);

async function workPost() {
  loading.value = true;
  await useWork().post({
    ..._work.value,
    work_status: "order",
    work_registration_date: new Date().toISOString().split("T")[0],
  });
  loading.value = false;

  toast("주문 등록이 완료 되었습니다.", {
    description: `${_work.value.work_name} 주문이 등록되었습니다.`,
  });

  useWork().get();
}
</script>
<template>
  <div class="p-4 flex flex-col gap-4 h-full">
    <div>
      <h3 class="text-lg font-bold">주문 등록</h3>
      <p class="text-sm text-muted-foreground">새로운 작업을 등록해주세요. 현수막, 자석 기타 등등...</p>
    </div>
    <Separator />
    <div class="grid w-full items-center gap-1.5">
      <Label>제목</Label>
      <Input v-model="_work.work_name" type="type" placeholder="제목" />
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>품목</Label>
      <Select v-model="_work.work_item">
        <SelectTrigger>
          <SelectValue class="text-neutral-500" placeholder="품목을 선택해주세요." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>품목</SelectLabel>
            <SelectItem value="billboard"> 현수막 </SelectItem>
            <SelectItem value="banner"> 배너 </SelectItem>
            <SelectItem value="car_magnet"> 차량자석 </SelectItem>
            <SelectItem value="roll_poster"> 롤포스터 </SelectItem>
            <SelectItem value="shoulder_strap"> 어깨띠 </SelectItem>
            <SelectItem value="name_tag"> 명찰 </SelectItem>
            <SelectItem value="print"> 인쇄 </SelectItem>
            <SelectItem value="synthetic_paper"> 합성지 </SelectItem>
            <SelectItem value="pet"> 펫트 </SelectItem>
            <SelectItem value="transparent_film"> 투명필름 </SelectItem>
            <SelectItem value="others"> 기타 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <p class="text-neutral-400 text-xs">현수막 X-Y 배너 차량자석 롤포스터 어깨띠 명찰 인쇄 합성지 펫트 투명필름 기타</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>사이즈</Label>
      <div class="flex gap-4 items-center">
        <Select v-model="_work.work_size">
          <SelectTrigger>
            <SelectValue class="text-neutral-500" placeholder="폭을 선택해주세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>품목</SelectLabel>
              <SelectItem value="60"> 60 </SelectItem>
              <SelectItem value="70"> 70 </SelectItem>
              <SelectItem value="90"> 90 </SelectItem>
              <SelectItem value="100"> 100 </SelectItem>
              <SelectItem value="110"> 110 </SelectItem>
              <SelectItem value="127"> 127 </SelectItem>
              <SelectItem value="150"> 150 </SelectItem>
              <SelectItem value="180"> 180 </SelectItem>
              <SelectItem value="180이상"> 180이상 </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="text-neutral-400">x</div>
        <Input v-model="_work.work_width" type="type" placeholder="사이즈" />
      </div>
      <p class="text-neutral-400 text-xs">현수막 규격폭 : 60, 70, 90, 100, 110, 127, 150, 180cm... (180cm이상은 2장이상 이어 가공됩니다)</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>수량</Label>
      <Input v-model="_work.work_quantity" type="type" placeholder="수량" />
      <p class="text-neutral-400 text-xs">수량</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>내용</Label>
      <Input v-model="_work.work_description" type="type" placeholder="내용" />
      <p class="text-neutral-400 text-xs">선택하신 샘플에서 수정사항을 기재해 주세요.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>이름</Label>
      <Input v-model="_work.customer_name" type="type" placeholder="이름" />
      <p class="text-neutral-400 text-xs">고객의 이름 또는 상호명을 입력해 주세요.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>전화번호</Label>
      <Input v-model="_work.customer_phone" type="type" placeholder="전화번호" />
      <p class="text-neutral-400 text-xs">휴대폰 번호등의 연락처를 입력해주세요.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>주소</Label>
      <Input v-model="_work.customer_address" type="type" placeholder="주소" />
      <p class="text-neutral-400 text-xs">설치 장소 또는 고객의 영업장 주소를 작성해 주세요.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>이메일</Label>
      <Input v-model="_work.customer_email" type="type" placeholder="이메일" />
      <p class="text-neutral-400 text-xs">이메일 주소는 필수는 아닙니다.</p>
    </div>
    <div class="grid w-full items-center gap-1.5">
      <Label>마감일</Label>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline" :class="cn('w-[280px] justify-start text-left font-normal', !value && 'text-muted-foreground')">
            {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Pick a date" }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar v-model="value" initial-focus />
        </PopoverContent>
      </Popover>
      <p class="text-neutral-400 text-xs">필수로 지정해주세요.</p>
    </div>
    <div class="w-full items-center gap-1.5 flex">
      <div class="grow-[0] w-full">
        <Label>마감일</Label>
        <p class="text-neutral-400 text-xs">필수로 지정해주세요.</p>
      </div>
      <div class="shrink-0">
        <Switch />
      </div>
    </div>
    <div class="w-full items-center gap-1.5 flex">
      <div class="grow-[0] w-full">
        <Label>마감일</Label>
        <p class="text-neutral-400 text-xs">필수로 지정해주세요.</p>
      </div>
      <div class="shrink-0">
        <Switch />
      </div>
    </div>
    <div class="w-full items-center gap-1.5 flex">
      <div class="grow-[0] w-full">
        <Label>마감일</Label>
        <p class="text-neutral-400 text-xs">필수로 지정해주세요.</p>
      </div>
      <div class="shrink-0">
        <Switch />
      </div>
    </div>
    <div class="flex gap-4 text-xs">
      <Button v-if="loading"> loading... </Button>
      <Button @click="workPost" v-else>주문 등록</Button>
      <Button variant="outline">취소</Button>
    </div>
  </div>
</template>
components/ui/switch
