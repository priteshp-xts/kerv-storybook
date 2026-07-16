import { Button, ButtonGroup } from './button';

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'primary', 'secondary', 'outline', 'destructive', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'default', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Outline = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Destructive = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Ghost = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Link = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'default',
  },
  render: (args) => <Button {...args} />,
};

export const Sizes = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">XS</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Settings">
        <PlusIcon className="h-4 w-4" />
      </Button>
      <Button size="icon-sm" aria-label="Arrow">
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const Rounded = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button className="rounded-full">Rounded</Button>
      <Button variant="outline" className="rounded-full">
        Rounded Outline
      </Button>
    </div>
  ),
};

export const IconButton = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="icon" aria-label="Add item">
        <PlusIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Next">
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const WithIcon = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <PlusIcon className="mr-2 h-4 w-4" />
        New Branch
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  ),
};

export const ButtonGroupExample = {
  render: () => (
    <ButtonGroup>
      <Button>Left</Button>
      <Button variant="outline">Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
};
