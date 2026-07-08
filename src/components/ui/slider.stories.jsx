import * as React from 'react';
import { Slider } from './slider';

export default {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => <Slider defaultValue={[33]} max={100} step={1} className="w-[360px]" />,
};

export const Range = {
  render: () => <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[360px]" />,
};

export const Controlled = {
  render: () => {
    const [value, setValue] = React.useState([30]);

    return (
      <div className="space-y-4">
        <Slider value={value} onValueChange={setValue} max={100} step={1} className="w-[360px]" />
        <div className="text-sm text-muted-foreground">Value: {value[0]}</div>
      </div>
    );
  },
};
