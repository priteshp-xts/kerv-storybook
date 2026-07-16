import { Button } from './button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer';

export default {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
};

function DrawerExample({ direction = 'bottom' }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent direction={direction}>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>
            This action cannot be undone. It will move through a sliding drawer from the selected side.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export const Bottom = {
  args: { direction: 'bottom' },
  render: (args) => <DrawerExample {...args} />,
};

export const Top = {
  args: { direction: 'top' },
  render: (args) => <DrawerExample {...args} />,
};

export const Left = {
  args: { direction: 'left' },
  render: (args) => <DrawerExample {...args} />,
};

export const Right = {
  args: { direction: 'right' },
  render: (args) => <DrawerExample {...args} />,
};
