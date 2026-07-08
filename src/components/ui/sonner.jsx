import * as React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = ({ ...props }) => {
  return <SonnerToaster {...props} />;
};

export { Toaster };
