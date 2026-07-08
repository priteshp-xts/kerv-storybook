import * as React from 'react';
import { cn } from '../../lib/utils';

const Field = React.forwardRef(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      orientation === 'horizontal'
        ? 'flex items-center gap-3'
        : 'grid gap-2',
      className,
    )}
    {...props}
  />
));
Field.displayName = 'Field';

const fieldStates = {
  disabled: 'data-[disabled=true]:opacity-50',
  invalid: 'data-[invalid=true]:text-destructive',
};

const FieldContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('grid gap-1.5', className)} {...props} />
));
FieldContent.displayName = 'FieldContent';

const FieldLabel = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      'text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
));
FieldLabel.displayName = 'FieldLabel';

const FieldDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
FieldDescription.displayName = 'FieldDescription';

const FieldError = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm font-medium text-destructive', className)} role="alert" {...props} />
));
FieldError.displayName = 'FieldError';

const FieldGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('grid gap-2', className)} {...props} />
));
FieldGroup.displayName = 'FieldGroup';

const FieldLegend = React.forwardRef(({ className, ...props }, ref) => (
  <legend ref={ref} className={cn('text-base font-semibold leading-none tracking-tight text-foreground', className)} {...props} />
));
FieldLegend.displayName = 'FieldLegend';

const FieldSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <hr ref={ref} className={cn('my-2 h-px border-0 bg-border', className)} {...props} />
));
FieldSeparator.displayName = 'FieldSeparator';

const FieldSet = React.forwardRef(({ className, ...props }, ref) => (
  <fieldset ref={ref} className={cn('grid gap-4 rounded-lg border border-border p-4', className)} {...props} />
));
FieldSet.displayName = 'FieldSet';

const FieldGroupRow = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('grid gap-4 sm:grid-cols-2', className)} {...props} />
));
FieldGroupRow.displayName = 'FieldGroupRow';

const FieldTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('text-base font-semibold leading-none tracking-tight', className)} {...props} />
));
FieldTitle.displayName = 'FieldTitle';

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldGroupRow,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
