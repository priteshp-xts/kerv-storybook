import * as React from 'react';
import { DatePicker, DateRangePicker } from './date-picker';

export default {
  title: 'UI/Date Picker',
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => {
    const [date, setDate] = React.useState();

    return <DatePicker value={date} onChange={setDate} />;
  },
};

export const RangePicker = {
  render: () => {
    const [range, setRange] = React.useState();

    return <DateRangePicker value={range} onChange={setRange} />;
  },
};
