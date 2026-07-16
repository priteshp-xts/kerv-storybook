import * as React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="w-[360px] rounded-lg border bg-background p-4">
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">Order #4189</p>
              <p className="text-sm text-muted-foreground">Toggle details</p>
            </div>
            <CollapsibleTrigger className="h-9 w-9 rounded-md border">
              <span className="sr-only">Toggle details</span>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <p className="text-sm text-muted-foreground">
              Yes. Free to use for personal and commercial projects. No attribution required.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const SettingsPanel = {
  render: () => {
    const [open, setOpen] = React.useState(true);

    return (
      <div className="w-[360px] rounded-lg border bg-background p-4">
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger className="w-full justify-between border px-3 py-2">
            <span>Settings Panel</span>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="space-y-2 pt-3">
              <p className="text-sm text-muted-foreground">Radius</p>
              <div className="grid grid-cols-2 gap-2">
                <button className="rounded-md border px-3 py-2 text-left text-sm">Radius X</button>
                <button className="rounded-md border px-3 py-2 text-left text-sm">Radius Y</button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};
