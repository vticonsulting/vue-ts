import Text from '../components/Text.vue';

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Text },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Text v-bind="args" />',
});


export const Normal = Template.bind({});
Normal.args = {
  label: 'Text',
  size: 60
};



