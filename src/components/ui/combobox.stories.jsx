import * as React from 'react';
import { Combobox, ComboboxMultiple } from './combobox';

const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro'];

export default {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  argTypes: {
    items: { control: false },
    multiple: { control: false },
    value: { control: false },
    onValueChange: { control: false },
    renderTrigger: { control: false },
    children: { control: false },
  },
};

export const Basic = {
  args: {
    placeholder: 'Select a framework',
    searchPlaceholder: 'Search frameworks...',
  },
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <Combobox
        {...args}
        items={frameworks}
        value={value}
        onValueChange={setValue}
      />
    );
  },
};

export const Multiple = {
  args: {
    placeholder: 'Select frameworks',
    searchPlaceholder: 'Search frameworks...',
  },
  render: (args) => {
    const [value, setValue] = React.useState([]);

    return (
      <ComboboxMultiple
        {...args}
        items={frameworks}
        multiple
        value={value}
        onValueChange={setValue}
        placeholder="Select frameworks"
      />
    );
  },
};
