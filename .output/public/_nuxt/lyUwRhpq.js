import{_ as V}from"./4fN1j-3H.js";import{a as j}from"./_KoRaoFi.js";import{_ as R,a as q,b as E,c as L,d as M,e as S,f as z,g as G,h as I}from"./F51a28Zt.js";import{_ as J,a as K,b as O,c as P,d as Q,e as U}from"./BNpk7Sz4.js";import{_ as W}from"./DArumWTV.js";import{d as X,u}from"./cfBU7kRw.js";import{n as Y,s as Z,A as tt,h as et,o as f,c as p,a as o,b as t,w as e,d as a,F as at,q as nt,u as ot,x as st,t as lt}from"./DvAY-tOQ.js";import _t from"./B0-TWwc3.js";import"./BLYTg4dL.js";import"./CJnucW8x.js";import"./Bb4qSo10.js";import"./CVOg1rtz.js";import"./r59y-1-a.js";const ct={class:"p-4 flex flex-col gap-4 overflow-hidden"},it=o("div",null,[o("h1",{class:"text-lg font-bold"},"설치 & 배송"),o("p",{class:"text-sm text-muted-foreground"},"설치한 사진 등록 및 상태 변경을 할 수 있습니다.")],-1),rt={class:"flex justify-between items-center"},dt={class:"flex gap-1 items-center"},ft=o("div",null,"＞",-1),mt={class:"flex gap-4 items-center"},ut=["src"],Ft=Y({__name:"installation",setup(pt){const l=X(),g=Z();tt(async()=>{i()}),et(()=>[g.value],()=>{i()},{deep:!0});async function i(){l.value=await u().get()}function $(_){const n=l.value.find(c=>c.draft_id===_);n&&(n.selected=!n.selected)}async function b(){const _=l.value.filter(n=>n.selected==!0);await u().del(_),i()}return(_,n)=>{const c=V,h=j,x=R,v=q,D=E,k=L,C=M,w=S,A=z,y=G,T=I,r=J,m=K,B=O,F=W,d=U,H=P,N=Q;return f(),p("div",ct,[it,o("div",rt,[o("div",dt,[t(c,{class:"px-2 py-1"},{default:e(()=>[a("설치전")]),_:1}),ft,t(c,{class:"px-2 py-1"},{default:e(()=>[a("설치완료")]),_:1})]),o("div",mt,[t(T,null,{default:e(()=>[t(x,{"as-child":""},{default:e(()=>[t(h,{variant:"secondary"},{default:e(()=>[a("삭제")]),_:1})]),_:1}),t(y,null,{default:e(()=>[t(k,null,{default:e(()=>[t(v,null,{default:e(()=>[a("정말로 삭제하시겠습니까??")]),_:1}),t(D,null,{default:e(()=>[a(" 한번 삭제하면 모든 데이터가 삭제되며, 되돌릴수 없습니다. ")]),_:1})]),_:1}),t(A,null,{default:e(()=>[t(C,null,{default:e(()=>[a("아니오")]),_:1}),t(w,{onClick:n[0]||(n[0]=s=>b())},{default:e(()=>[a("네")]),_:1})]),_:1})]),_:1})]),_:1}),t(_t)])]),t(N,{class:"border rounded-lg border-separate"},{default:e(()=>[t(B,null,{default:e(()=>[t(m,null,{default:e(()=>[t(r,{class:"w-[100px]"},{default:e(()=>[a(" id ")]),_:1}),t(r,null,{default:e(()=>[a("시안")]),_:1}),t(r,null,{default:e(()=>[a("등록 시간")]),_:1})]),_:1})]),_:1}),t(H,null,{default:e(()=>[(f(!0),p(at,null,nt(ot(l),s=>(f(),st(m,{key:s.draft_id},{default:e(()=>[t(d,{class:"font-medium border-t"},{default:e(()=>[t(F,{id:"terms",onClick:gt=>$(s.draft_id)},null,8,["onClick"])]),_:2},1024),t(d,{class:"border-t"},{default:e(()=>[o("img",{class:"rounded-lg h-44",src:s.draft_image_path,alt:"draft"},null,8,ut)]),_:2},1024),t(d,{class:"border-t"},{default:e(()=>[a(lt(s.draft_registration_date),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}}});export{Ft as default};