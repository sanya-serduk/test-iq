import{_,o as a,c,r as d,b as f,H as i,f as m,F as S,k as h,m as k,z as v}from"./index-wLuavzeT.js";import{u as g}from"./test-CLXZmVrq.js";const y={},x={class:"step-title"};function C(r,e){return a(),c("div",x,[d(r.$slots,"default",{},()=>[f("Заголовок")])])}const $=_(y,[["render",C]]),D={class:"step-template"},F={__name:"StepTemplate",setup(r){const e=i(),t=m(()=>e.default?e.default():[]);return(o,l)=>(a(),c("form",D,[(a(!0),c(S,null,h(t.value,(p,n)=>(a(),c("div",{class:"step-template__item",key:n},[(a(),k(v(p)))]))),128))]))}};function z({id:r,radiobuttons:e,emit:t}){const o=r.toString(),l=g(),p=l.getStepData(o);e=e.map(s=>({name:o,value:s}));const n=e.find(s=>p===s.value);n?(n.checked=!0,t("step-is-ready",!0)):t("step-is-ready",!1);function u(s){l.setStepData(o,s.target.value),t("step-is-ready",!0)}return{radiobuttons:e,handlerChange:u}}export{$ as S,F as _,z as u};
