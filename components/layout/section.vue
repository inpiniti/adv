<template>
  <div class="px-4 py-2 flex justify-between items-center">
    <div class="font-bold">작업 현황</div>
    <Tabs default-value="dashboard">
      <TabsList>
        <TabsTrigger value="dashboard"> 대시보드 </TabsTrigger>
        <TabsTrigger value="order"> 주문 </TabsTrigger>
        <TabsTrigger value="design"> 디자인 작업 </TabsTrigger>
        <TabsTrigger value="draft"> 시안 </TabsTrigger>
        <TabsTrigger value="confirmation"> 고객 컴펌 </TabsTrigger>
        <TabsTrigger value="production"> 제작 </TabsTrigger>
        <TabsTrigger value="installation"> 배송 or 설치 </TabsTrigger>
        <TabsTrigger value="payment"> 입금 </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</template>
