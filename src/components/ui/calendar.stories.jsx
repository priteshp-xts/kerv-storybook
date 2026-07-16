import * as React from 'react';
import { addDays } from 'date-fns';
import { Calendar } from './calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => <Calendar mode="single" className="rounded-lg border" />,
};

export const RangeCalendar = {
  render: () => {
    const [dateRange, setDateRange] = React.useState({
      from: new Date(new Date().getFullYear(), 0, 12),
      to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
    });

    return (
      <Calendar
        mode="range"
        defaultMonth={dateRange?.from}
        selected={dateRange}
        onSelect={setDateRange}
        numberOfMonths={2}
        className="rounded-lg border"
      />
    );
  },
};

export const MonthAndYearSelector = {
  render: () => {
    const [date, setDate] = React.useState(new Date(2026, 6, 25));

    return (
      <Calendar
        mode="single"
        captionLayout="dropdown"
        startMonth={new Date(2020, 0)}
        endMonth={new Date(2030, 11)}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    );
  },
};
