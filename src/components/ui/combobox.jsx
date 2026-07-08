import * as React from 'react';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const CheckIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Combobox = React.forwardRef(
  (
    {
      className,
      items = [],
      value,
      onValueChange,
      multiple = false,
      placeholder = 'Select an option',
      searchPlaceholder = 'Search...',
      emptyText = 'No items found.',
      renderTrigger,
      children,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');

    const selectedValues = multiple ? (Array.isArray(value) ? value : []) : [value].filter(Boolean);

    const filteredItems = items.filter((item) => {
      const text = String(item).toLowerCase();
      return text.includes(query.toLowerCase());
    });

    const handleSelect = (item) => {
      if (multiple) {
        const next = selectedValues.includes(item)
          ? selectedValues.filter((current) => current !== item)
          : [...selectedValues, item];
        onValueChange?.(next);
        return;
      }

      onValueChange?.(item);
      setOpen(false);
    };

    const triggerLabel = multiple
      ? selectedValues.length
        ? selectedValues.join(', ')
        : placeholder
      : value || placeholder;

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <div ref={ref} className={cn('relative', className)} {...props}>
          {renderTrigger ? (
            renderTrigger({
              open,
              value,
              setOpen,
              placeholder,
            })
          ) : (
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                <span className="truncate">{triggerLabel}</span>
                <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
          )}

          <PopoverContent className="w-[var(--radix-popper-anchor-width)] p-0">
            <div className="border-b p-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="max-h-64 overflow-auto p-1">
              {filteredItems.length ? (
                filteredItems.map((item) => {
                  const isSelected = selectedValues.includes(item);

                  return (
                    <button
                      key={String(item)}
                      type="button"
                      onClick={() => handleSelect(item)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-sm px-2 py-2 text-left text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground',
                        isSelected && 'bg-accent text-accent-foreground',
                      )}
                    >
                      <span>{item}</span>
                      {isSelected ? <CheckIcon className="h-4 w-4" /> : null}
                    </button>
                  );
                })
              ) : (
                <div className="px-2 py-6 text-center text-sm text-muted-foreground">{emptyText}</div>
              )}
            </div>
            {children}
          </PopoverContent>
        </div>
      </Popover>
    );
  },
);
Combobox.displayName = 'Combobox';

const ComboboxMultiple = Combobox;

export { Combobox, ComboboxMultiple };
