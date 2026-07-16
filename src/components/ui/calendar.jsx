import * as React from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { cn } from '../../lib/utils';

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const defaultClassNames = getDefaultClassNames();
  const isRangeMode = props.mode === 'range';
  const isDropdownCaption =
    typeof props.captionLayout === 'string' && props.captionLayout.startsWith('dropdown');

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('rounded-lg border bg-background p-3', className)}
      classNames={{
        root: cn(defaultClassNames.root, 'w-full'),
        months: cn(defaultClassNames.months, 'flex flex-col gap-4 sm:flex-row'),
        month: cn(defaultClassNames.month, 'space-y-4'),
        month_caption: cn(defaultClassNames.month_caption, 'relative flex h-9 items-center justify-center px-2'),
        caption: cn(defaultClassNames.caption, 'relative flex items-center justify-center'),
        caption_label: cn(
          defaultClassNames.caption_label,
          isDropdownCaption && 'sr-only',
          'text-sm font-medium text-foreground',
        ),
        dropdowns: cn(defaultClassNames.dropdowns, 'flex items-center gap-2'),
        dropdown_root: cn(defaultClassNames.dropdown_root, 'relative inline-flex items-center'),
        nav: cn(defaultClassNames.nav, 'absolute inset-x-0 top-0 flex h-9 items-center justify-between px-0'),
        button_previous: cn(defaultClassNames.button_previous, 'h-7 w-7 rounded-md bg-transparent p-0 text-foreground opacity-70 hover:opacity-100'),
        button_next: cn(defaultClassNames.button_next, 'h-7 w-7 rounded-md bg-transparent p-0 text-foreground opacity-70 hover:opacity-100'),
        chevron: cn(defaultClassNames.chevron, 'h-4 w-4 fill-current'),
        dropdown: cn(defaultClassNames.dropdown, 'h-8 rounded-md border border-border bg-background px-2 text-sm shadow-sm outline-none'),
        table: cn(defaultClassNames.table, 'w-full border-collapse'),
        month_grid: cn(defaultClassNames.month_grid, 'w-full border-collapse'),
        weekdays: cn(defaultClassNames.weekdays, 'flex'),
        weekday: cn(defaultClassNames.weekday, 'w-10 rounded-md pb-2 text-center text-[0.8rem] font-normal text-muted-foreground'),
        week: cn(defaultClassNames.week, 'flex w-full'),
        day: cn(defaultClassNames.day, 'relative h-10 w-10 p-0 text-center text-sm focus-within:z-20'),
        day_button: cn(defaultClassNames.day_button, 'h-9 w-9 rounded-[5px] border border-transparent bg-transparent p-0 font-normal  hover:text-accent-foreground'),
        today: cn(defaultClassNames.today, 'text-[#ed3b64] font-semibold'),
        selected: cn(
          defaultClassNames.selected,
          isRangeMode ? 'bg-[#f4f4f5] text-black' : 'bg-[#ed3b64] text-white [&_.rdp-day_button]:text-white',
          'shadow-sm [&_.rdp-day_button]:rounded-[5px] rounded-lg'
        ),
        outside: cn(defaultClassNames.outside, 'text-muted-foreground/40'),
        disabled: cn(defaultClassNames.disabled, 'text-muted-foreground/40'),
        hidden: cn(defaultClassNames.hidden, 'invisible'),
        range_middle: cn(defaultClassNames.range_middle, 'bg-[#f4f4f5] text-black'),
        range_start: cn(
          defaultClassNames.range_start,
          '!bg-[#ed3b64] !bg-none !text-white shadow-sm [&_.rdp-day_button]:!bg-[#ed3b64] [&_.rdp-day_button]:!text-white [&_.rdp-day_button]:rounded-[5px]',
        ),
        range_end: cn(
          defaultClassNames.range_end,
          '!bg-[#ed3b64] !bg-none !text-white shadow-sm [&_.rdp-day_button]:!bg-[#ed3b64] [&_.rdp-day_button]:!text-white [&_.rdp-day_button]:rounded-[5px]',
        ),
        ...classNames,
      }}
      {...props}
    />
  );
}

Calendar.displayName = 'Calendar';

export { Calendar };
