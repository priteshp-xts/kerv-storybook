import { Badge } from './badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export const Default = {
  args: {
    children: 'On Hold',
    variant: 'default',
  },
  render: (args) => <Badge {...args} />,
};

export const Secondary = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  render: (args) => <Badge {...args} />,
};

export const Destructive = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
  render: (args) => <Badge {...args} />,
};

export const Outline = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
  render: (args) => <Badge {...args} />,
};

export const CustomColors = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge className="border-transparent bg-green-50 text-green-800 hover:bg-green-50 dark:bg-green-800 dark:text-green-50">
        Green
      </Badge>
      <Badge className="border-transparent bg-sky-50 text-sky-800 hover:bg-sky-50 dark:bg-sky-800 dark:text-sky-50">
        Sky
      </Badge>
      <Badge className="border-transparent bg-purple-50 text-purple-800 hover:bg-purple-50 dark:bg-purple-800 dark:text-purple-50">
        Purple
      </Badge>
      <Badge className="border-transparent bg-red-50 text-red-800 hover:bg-red-50 dark:bg-red-800 dark:text-red-50">
        Red
      </Badge>
    </div>
  ),
};
