import * as React from 'react';
import { cn } from '../../lib/utils';

const ProgressContext = React.createContext(null);

const Progress = React.forwardRef(({ className, value = 0, max = 100, children, ...props }, ref) => {
  const safeMax = max > 0 ? max : 100;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = Math.min(Math.max((safeValue / safeMax) * 100, 0), 100);

  return (
    <ProgressContext.Provider value={{ value: safeValue, max: safeMax, percentage }}>
      <div className={cn('grid gap-2', className)} {...props}>
        {children}
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={safeMax}
          aria-valuenow={safeValue}
          className="relative h-2 w-full overflow-hidden rounded-full bg-muted"
        >
          <div
            className="h-full w-full flex-1 bg-primary transition-all"
            style={{ transform: `translateX(-${100 - percentage}%)` }}
          />
        </div>
      </div>
    </ProgressContext.Provider>
  );
});
Progress.displayName = 'Progress';

const ProgressLabel = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props} />
));
ProgressLabel.displayName = 'ProgressLabel';

const ProgressValue = React.forwardRef(({ className, format = 'percent', ...props }, ref) => {
  const context = React.useContext(ProgressContext);
  const value = context?.value ?? 0;
  const max = context?.max ?? 100;
  const percentage = context?.percentage ?? 0;

  const displayValue =
    format === 'value'
      ? `${value}/${max}`
      : `${Math.round(percentage)}%`;

  return (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props}>
      {displayValue}
    </div>
  );
});
ProgressValue.displayName = 'ProgressValue';

const ProgressTrack = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('relative h-2 w-full overflow-hidden rounded-full bg-muted', className)} {...props}>
    {children}
  </div>
));
ProgressTrack.displayName = 'ProgressTrack';

const ProgressIndicator = React.forwardRef(({ className, value = 0, max = 100, ...props }, ref) => {
  const safeMax = max > 0 ? max : 100;
  const safeValue = Math.min(Math.max(value, 0), safeMax);
  const percentage = Math.min(Math.max((safeValue / safeMax) * 100, 0), 100);

  return (
    <div
      ref={ref}
      className={cn('h-full w-full flex-1 bg-primary transition-all', className)}
      style={{ transform: `translateX(-${100 - percentage}%)` }}
      {...props}
    />
  );
});
ProgressIndicator.displayName = 'ProgressIndicator';

export { Progress, ProgressIndicator, ProgressLabel, ProgressTrack, ProgressValue };
