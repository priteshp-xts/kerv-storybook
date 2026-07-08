import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../lib/utils';

const ButtonGroup = React.forwardRef(({ className, orientation = 'horizontal', ...props }, ref) => (
  <div
    ref={ref}
    role="group"
    aria-orientation={orientation}
    className={cn(
      'inline-flex items-stretch overflow-hidden rounded-md border border-input shadow-sm',
      orientation === 'horizontal'
        ? '[&>*]:rounded-none [&>*:not(:first-child)]:-ml-px [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md'
        : 'flex-col [&>*]:rounded-none [&>*:not(:first-child)]:-mt-px [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md',
      className,
    )}
    {...props}
  />
));
ButtonGroup.displayName = 'ButtonGroup';

const ButtonGroupSeparator = React.forwardRef(({ className, orientation = 'vertical', ...props }, ref) => (
  <span
    ref={ref}
    role="separator"
    aria-orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
      className,
    )}
    {...props}
  />
));
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

const ButtonGroupText = React.forwardRef(({ asChild = false, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      ref={ref}
      className={cn('inline-flex items-center px-3 text-sm text-muted-foreground', className)}
      {...props}
    />
  );
});
ButtonGroupText.displayName = 'ButtonGroupText';

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };
