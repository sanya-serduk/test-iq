import{E as o,o as s,c as t,G as d,a as l,r as _,b as r,F as u,k as p,i as m,w as h,t as v}from"./index-wLuavzeT.js";const k={class:"radio-simple"},y=["name","value","checked"],f=l("span",{class:"radio-simple__back"},null,-1),S=l("span",{class:"radio-simple__checked"},null,-1),g={class:"radio-simple__label"},x={__name:"RadioSimple",props:{name:{type:String,default:"radio"},value:{type:[Number,String],default:0},checked:{type:Boolean,default:!1}},setup(e){return(c,n)=>{const i=o("visually-hidden");return s(),t("label",k,[d(l("input",{class:"radio-simple__input",type:"radio",name:e.name,value:e.value,checked:e.checked},null,8,y),[[i]]),f,S,l("span",g,[_(c.$slots,"default",{},()=>[r("Выбрать")])])])}}},B={class:"radioset-simple"},b={__name:"RadiosetSimple",props:{radiobuttons:{type:Array,required:!0}},setup(e){const c=e;return(n,i)=>(s(),t("ul",B,[(s(!0),t(u,null,p(c.radiobuttons,a=>(s(),t("li",{key:a.value,class:"radioset-simple__item"},[m(x,{name:a.name,value:a.value,checked:a.checked},{default:h(()=>[r(v(a.value),1)]),_:2},1032,["name","value","checked"])]))),128))]))}};export{b as _};
