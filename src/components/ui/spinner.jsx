import * as React from 'react';
import { cn } from '../../lib/utils';

const Spinner = React.forwardRef(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    role="status"
    aria-label="Loading"
    viewBox="0 0 24 24"
    fill="none"
    className={cn('h-4 w-4 animate-spin', className)}
    {...props}
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" className="opacity-25" strokeWidth="4" />
    <path
      d="M22 12a10 10 0 0 0-10-10"
      stroke="currentColor"
      className="opacity-75"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
));
Spinner.displayName = 'Spinner';

export { Spinner };
