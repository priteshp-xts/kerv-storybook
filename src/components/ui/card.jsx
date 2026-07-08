import React from 'react';
import { cn } from '../../lib/utils';

const cardSizeClasses = {
  default: 'gap-[var(--card-spacing)] py-[var(--card-spacing)] [--card-spacing:1rem]',
  sm: 'gap-[var(--card-spacing)] py-[var(--card-spacing)] [--card-spacing:0.75rem]',
};

const Card = React.forwardRef(({ className, size = 'default', style, ...props }, ref) => (
  <div
    ref={ref}
    data-size={size}
    style={{ ...style }}
    className={cn(
      'group/card flex flex-col overflow-hidden rounded-xl border bg-card text-card-foreground ring-1 ring-foreground/10 shadow-sm',
      cardSizeClasses[size] ?? cardSizeClasses.default,
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn(
      'grid auto-rows-min items-start gap-1.5 px-[var(--card-spacing)] [grid-template-columns:1fr_auto] has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]',
      className,
    )}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    data-slot="card-title"
    className={cn('col-start-1 row-start-1 text-2xl font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="card-description"
    className={cn('col-start-1 row-start-2 text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardAction = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-action"
    className={cn('col-start-2 row-span-2 row-start-1 justify-self-end self-start', className)}
    {...props}
  />
));
CardAction.displayName = 'CardAction';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-content"
    className={cn('px-[var(--card-spacing)] pb-[var(--card-spacing)] pt-0', className)}
    {...props}
  />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn('flex items-center px-[var(--card-spacing)] pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
