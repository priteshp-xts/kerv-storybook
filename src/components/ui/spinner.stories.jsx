import { Badge } from './badge';
import { Button } from './button';
import { Input } from './input';
import { Spinner } from './spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Size = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner className="h-4 w-4" />
      <Spinner className="h-6 w-6" />
      <Spinner className="h-8 w-8" />
    </div>
  ),
};

export const ButtonExample = {
  render: () => (
    <Button disabled>
      <Spinner className="mr-2 h-4 w-4" />
      Please wait
    </Button>
  ),
};

export const BadgeExample = {
  render: () => (
    <Badge variant="secondary" className="gap-2">
      <Spinner className="h-3 w-3" />
      Syncing
    </Badge>
  ),
};

export const InputGroupExample = {
  render: () => (
    <div className="flex w-full max-w-sm items-center">
      <Input className="rounded-r-none" placeholder="Validating..." />
      <Button className="rounded-l-none" type="button" disabled>
        <Spinner className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const EmptyExample = {
  render: () => (
    <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-lg border border-border p-6 text-center">
      <Spinner className="h-6 w-6" />
      <div>
        <p className="text-sm font-medium">Processing your request</p>
        <p className="text-sm text-muted-foreground">
          Please wait while we process your request. Do not refresh the page.
        </p>
      </div>
      <Button variant="outline">Cancel</Button>
    </div>
  ),
};
