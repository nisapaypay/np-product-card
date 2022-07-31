import ProductCard from './ProductCard.vue';

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
  // Components used in your story `template` are defined in the `components` object
  components: { ProductCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
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
