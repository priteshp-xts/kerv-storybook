import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const itemVariants = cva('group/item relative flex w-full gap-4 rounded-lg transition-colors', {
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-border bg-background shadow-sm',
      muted: 'border border-border bg-muted/50',
    },
    size: {
      default: 'p-4',
      sm: 'p-3',
      xs: 'p-2',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const itemMediaVariants = cva('flex shrink-0 items-center justify-center overflow-hidden rounded-md', {
  variants: {
    variant: {
      default: 'bg-muted text-muted-foreground',
      icon: 'bg-muted text-muted-foreground',
      avatar: 'rounded-full bg-muted text-muted-foreground',
      image: 'bg-muted',
    },
    size: {
      default: 'h-12 w-12',
      sm: 'h-10 w-10',
      xs: 'h-8 w-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Item = React.forwardRef(({ className, variant, size, render, children, ...props }, ref) => {
  const Comp = render ? Slot : 'div';

  return (
    <Comp ref={ref} className={cn(itemVariants({ variant, size }), className)} {...props}>
      {children}
    </Comp>
  );
});
Item.displayName = 'Item';

const ItemGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('overflow-hidden rounded-lg border border-border', className)} {...props} />
));
ItemGroup.displayName = 'ItemGroup';

const ItemSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} role="separator" className={cn('h-px w-full bg-border', className)} {...props} />
));
ItemSeparator.displayName = 'ItemSeparator';

const ItemHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-start justify-between gap-3', className)} {...props} />
));
ItemHeader.displayName = 'ItemHeader';

const ItemMedia = React.forwardRef(({ className, variant = 'default', size = 'default', children, ...props }, ref) => (
  <div ref={ref} className={cn(itemMediaVariants({ variant, size }), className)} {...props}>
    {variant === 'image' ? children : <span className="inline-flex items-center justify-center">{children}</span>}
  </div>
));
ItemMedia.displayName = 'ItemMedia';

const ItemContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('min-w-0 flex-1 space-y-1', className)} {...props} />
));
ItemContent.displayName = 'ItemContent';

const ItemTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn('truncate text-sm font-medium leading-none', className)} {...props} />
));
ItemTitle.displayName = 'ItemTitle';

const ItemDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
ItemDescription.displayName = 'ItemDescription';

const ItemActions = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex shrink-0 items-center gap-2 self-start', className)} {...props} />
));
ItemActions.displayName = 'ItemActions';

const ItemFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('mt-3 flex items-center justify-between gap-3 text-sm text-muted-foreground', className)} {...props} />
));
ItemFooter.displayName = 'ItemFooter';

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
