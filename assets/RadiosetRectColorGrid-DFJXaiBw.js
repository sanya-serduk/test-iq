import{E as d,o as t,c as r,G as l,a as c,n,F as o,k as u,i as _}from"./index-wLuavzeT.js";const m=["name","value","checked"],v=c("span",{class:"radio-rect-grid__checked"},null,-1),h={__name:"RadioRectColor",props:{name:{type:String,default:"radio"},value:{type:[Number,String],default:0},checked:{type:Boolean,default:!1}},setup(e){return(s,i)=>{const a=d("visually-hidden");return t(),r("label",{class:"radio-rect-grid",style:n({backgroundColor:e.value})},[l(c("input",{class:"radio-rect-grid__input",type:"radio",name:e.name,value:e.value,checked:e.checked},null,8,m),[[a]]),v],4)}}},k={class:"radioset-rect-grid"},p={class:"radioset-rect-grid__button"},g={__name:"RadiosetRectColorGrid",props:{radiobuttons:{type:Array,required:!0}},setup(e){return(s,i)=>(t(),r("div",k,[(t(!0),r(o,null,u(e.radiobuttons,a=>(t(),r("div",{key:a.value,class:"radioset-rect-grid__item"},[c("div",p,[_(h,{name:a.name,value:a.value,checked:a.checked},null,8,["name","value","checked"])])]))),128))]))}};export{g as _};
