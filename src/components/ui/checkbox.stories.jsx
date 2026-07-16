import * as React from 'react';
import { Checkbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <label className="flex items-center gap-3 text-sm text-foreground">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        Accept terms and conditions
      </label>
    );
  },
};

export const Checked = {
  render: () => {
    const [checked, setChecked] = React.useState(true);

    return (
      <label className="flex items-center gap-3 text-sm text-foreground">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        Enabled by default
      </label>
    );
  },
};

export const Disabled = {
  render: () => (
    <label className="flex items-center gap-3 text-sm text-foreground">
      <Checkbox checked disabled />
      Disabled checkbox
    </label>
  ),
};
