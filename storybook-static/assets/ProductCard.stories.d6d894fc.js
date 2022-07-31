import{r as p,a as u,b as s,d as e,n as m,e as _,o as a}from"./vue.esm-bundler.478a829e.js";const y="/assets/product-image.9a8656b9.jpeg",g=(t,r)=>{const n=t.__vccOpts||t;for(const[o,d]of r)n[o]=d;return n},c={name:"product-card",props:{type:{type:String,validator:function(t){return["default","disabled"].indexOf(t)!==-1}},size:{type:String,validator:function(t){return["default","small"].indexOf(t)!==-1}}},setup(t){return t=p(t),{classes:u(()=>({[`card ${t.size||""}`]:!0}))}}},b={href:"#"},f=e("figure",{class:"card-image"},[e("img",{src:y,alt:""})],-1),v={class:"card-content"},h={class:"card-content__info"},x=_('<div class="card-content__title">NIKE AJ1 Retro High White University Blue NIKE AJ1 Retro High White University Blue</div><div class="card-content__price"><div class="card-content__price-after"> Rp912.170 </div><div class="card-content__price-wrap"><span class="card-content__price-before"> Rp1.099.000 </span><span class="card-content__price-discount"> 17% </span></div></div>',2),C={class:"card-content__btn"},k={key:0,type:"button",class:"card__button_add disabled"},B={key:1,type:"button",class:"card__button_add"};function S(t,r,n,o,d,T){return a(),s("div",{class:m(o.classes)},[e("a",b,[f,e("div",v,[e("div",h,[x,e("div",C,[n.type==="disabled"?(a(),s("button",k,"Out Of Stock")):(a(),s("button",B,"Add to bag"))])])])])],2)}const i=g(c,[["render",S]]);c.__docgenInfo={displayName:"product-card",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"string"},values:["default","disabled"]},{name:"size",type:{name:"string"},values:["default","small"]}]};const N={parameters:{storySource:{source:`import ProductCard from './ProductCard.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/ProductCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['normal', 'disabled'],
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story \`template\` are defined in the \`components\` object
  components: { ProductCard },
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method
  setup() {
    return { args };
  },
  // And then the \`args\` are bound to your component with \`v-bind="args"\`
  template: '<product-card v-bind="args" />',
});

export const Disabled = Template.bind({});
Disabled.args = {
  type: 'disabled'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
`,locationsMap:{disabled:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}},small:{startLoc:{col:17,line:21},endLoc:{col:2,line:30},startBody:{col:17,line:21},endBody:{col:2,line:30}}}}},title:"Example/ProductCard",component:i,argTypes:{type:{control:{type:"select"},options:["normal","disabled"]},size:{control:{type:"select"},options:["medium","small"]}}},l=t=>({components:{ProductCard:i},setup(){return{args:t}},template:'<product-card v-bind="args" />'}),z=l.bind({});z.args={type:"disabled"};const P=l.bind({});P.args={size:"small"};const O=["Disabled","Small"];export{z as Disabled,P as Small,O as __namedExportsOrder,N as default};
//# sourceMappingURL=ProductCard.stories.d6d894fc.js.map
