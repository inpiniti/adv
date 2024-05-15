<template>
  <div class="p-4">
    <Card class="p-4 text-sm w-96 flex flex-col gap-2">
      <div>
        <div class="text-lg">광고나라</div>
        <div class="flex justify-between">
          <div>사업자 : 105-16-000</div>
          <div>대표자: 정병기</div>
        </div>
        <div>주소 : 서울 마포구 연남동 565-15</div>
        <div>전화번호 : 02-000-0000</div>
        <div>2018-01-07 14:23:30</div>
      </div>
      <Separator />
      <div>
        <Table class="border-separate">
          <TableHeader>
            <TableRow>
              <TableHead class="p-0 h-fit">상품명</TableHead>
              <TableHead class="p-0 h-fit text-right">단가</TableHead>
              <TableHead class="p-0 h-fit text-right">수량</TableHead>
              <TableHead class="p-0 h-fit text-right">금액</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="p-0"> 시안비 </TableCell>
              <TableCell class="p-0 text-right">20,000</TableCell>
              <TableCell class="p-0 text-right">1</TableCell>
              <TableCell class="p-0 text-right">20,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="p-0"> 제작비 </TableCell>
              <TableCell class="p-0 text-right">100,000</TableCell>
              <TableCell class="p-0 text-right">1</TableCell>
              <TableCell class="p-0 text-right">100,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="p-0"> 배송 & 설치비 </TableCell>
              <TableCell class="p-0 text-right">200,000</TableCell>
              <TableCell class="p-0 text-right">1</TableCell>
              <TableCell class="p-0 text-right">200,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="p-0"> 과세물품금액 </TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0 text-right">310,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="p-0"> 부가세 </TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0 text-right">31,000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="p-0"> 합계 </TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0"></TableCell>
              <TableCell class="p-0 text-right">341,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Separator />
      <div>
        <div class="text-lg">주문정보</div>
        <div>주문번호 : 202201010001</div>
        <div>주문일시 : 2022-01-01 00:00:00</div>
        <div>결제방법 : 신용카드</div>
        <div>결제금액 : 100,000원</div>
        <div>결제상태 : 결제완료</div>
      </div>
    </Card>
  </div>
</template>
