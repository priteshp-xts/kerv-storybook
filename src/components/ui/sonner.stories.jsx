import { toast } from 'sonner';
import { Button } from './button';
import { Toaster } from './sonner';

export default {
  title: 'Components/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Types = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Toaster richColors />
      <Button variant="outline" onClick={() => toast('Default toast message.')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Success toast message.')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Error toast message.')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.info('Info toast message.')}>
        Info
      </Button>
    </div>
  ),
};

export const Position = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Toaster richColors position="top-left" />
      <Button variant="outline" onClick={() => toast('Top Left toast', { position: 'top-left' })}>
        Top Left
      </Button>
      <Button variant="outline" onClick={() => toast('Top Center toast', { position: 'top-center' })}>
        Top Center
      </Button>
      <Button variant="outline" onClick={() => toast('Top Right toast', { position: 'top-right' })}>
        Top Right
      </Button>
      <Button variant="outline" onClick={() => toast('Bottom Left toast', { position: 'bottom-left' })}>
        Bottom Left
      </Button>
      <Button variant="outline" onClick={() => toast('Bottom Center toast', { position: 'bottom-center' })}>
        Bottom Center
      </Button>
      <Button variant="outline" onClick={() => toast('Bottom Right toast', { position: 'bottom-right' })}>
        Bottom Right
      </Button>
    </div>
  ),
};
