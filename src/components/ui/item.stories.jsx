import { Button } from './button';
import {
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
} from './item';

export default {
  title: 'UI/Item',
  component: Item,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

function BadgeCheckIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 12.5l2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2l2.1 1.3 2.4-.1 1.3 2.1 2.1 1.3-.1 2.4L21 12l-1.3 2.1.1 2.4-2.1 1.3-1.3 2.1-2.4-.1L12 22l-2.1-1.3-2.4.1-1.3-2.1-2.1-1.3.1-2.4L2 12l1.3-2.1-.1-2.4 2.1-1.3 1.3-2.1 2.4.1L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

const demoImage =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2563eb"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs><rect width="96" height="96" rx="20" fill="url(#g)"/><circle cx="36" cy="38" r="10" fill="#fff" fill-opacity="0.95"/><path d="M18 78c7-14 17-21 30-21s23 7 30 21" stroke="#fff" stroke-width="10" stroke-linecap="round"/></svg>',
  );

function Shell({ children, className = '' }) {
  return <div className={`w-full max-w-xl ${className}`}>{children}</div>;
}

export const Basic = {
  render: () => (
    <Shell>
      <Item variant="default" size="default">
        <ItemMedia variant="icon">
          <BadgeCheckIcon className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Basic item</ItemTitle>
          <ItemDescription>A simple item with a title and description.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
    </Shell>
  ),
};

export const Outline = {
  render: () => (
    <Shell>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BadgeCheckIcon className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Outline variant</ItemTitle>
          <ItemDescription>Outlined style with a visible border.</ItemDescription>
        </ItemContent>
      </Item>
    </Shell>
  ),
};

export const Muted = {
  render: () => (
    <Shell>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <BadgeCheckIcon className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Muted variant</ItemTitle>
          <ItemDescription>Muted background for secondary content.</ItemDescription>
        </ItemContent>
      </Item>
    </Shell>
  ),
};

export const Sizes = {
  render: () => (
    <Shell className="space-y-3">
      <Item size="default" variant="outline">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>The standard size for most use cases.</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="sm" variant="outline">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>A compact size for dense layouts.</ItemDescription>
        </ItemContent>
      </Item>
      <Item size="xs" variant="outline">
        <ItemContent>
          <ItemTitle>Extra small size</ItemTitle>
          <ItemDescription>The most compact size available.</ItemDescription>
        </ItemContent>
      </Item>
    </Shell>
  ),
};

export const Icon = {
  render: () => (
    <Shell>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <BadgeCheckIcon className="h-5 w-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Security alert</ItemTitle>
          <ItemDescription>New login detected from an unknown device.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm">Review</Button>
        </ItemActions>
      </Item>
    </Shell>
  ),
};

export const Avatar = {
  render: () => (
    <Shell className="space-y-3">
      <Item variant="outline">
        <ItemMedia variant="avatar" className="text-sm font-medium">
          ER
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="avatar" className="text-sm font-medium">
          CN
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No team members</ItemTitle>
          <ItemDescription>Invite your team to collaborate on this project.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </Shell>
  ),
};

export const Image = {
  render: () => (
    <Shell>
      <Item variant="outline">
        <ItemMedia variant="image" className="h-12 w-12">
          <img src={demoImage} alt="Demo artwork" className="h-full w-full object-cover" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Midnight City Lights</ItemTitle>
          <ItemDescription>Electric Nights - Neon Dreams</ItemDescription>
          <ItemFooter>
            <span>3:45</span>
            <span>Coffee Shop Conversations</span>
          </ItemFooter>
        </ItemContent>
      </Item>
    </Shell>
  ),
};

export const Group = {
  render: () => (
    <Shell>
      <ItemGroup>
        <Item variant="default" size="default">
          <ItemContent>
            <ItemTitle>shadcn</ItemTitle>
            <ItemDescription>shadcn@vercel.com</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="default" size="default">
          <ItemContent>
            <ItemTitle>maxleiter</ItemTitle>
            <ItemDescription>maxleiter@vercel.com</ItemDescription>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item variant="default" size="default">
          <ItemContent>
            <ItemTitle>evilrabbit</ItemTitle>
            <ItemDescription>evilrabbit@vercel.com</ItemDescription>
          </ItemContent>
        </Item>
      </ItemGroup>
    </Shell>
  ),
};

const models = [
  {
    name: 'v0-1.5-sm',
    description: 'Everyday tasks and UI generation.',
    image: 'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Valeria Reverdo on Unsplash',
  },
  {
    name: 'v0-1.5-lg',
    description: 'Advanced thinking or reasoning.',
    image: 'https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop',
    credit: 'Michael Oeser on Unsplash',
  },
  {
    name: 'v0-2.0-mini',
    description: 'Open Source model for everyone.',
    image: 'https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop',
    credit: 'Cherry Laithang on Unsplash',
  },
];

export const Header = {
  render: () => (
    <Shell className="max-w-5xl">
      <ItemGroup className="flex flex-row gap-4 border-0 rounded-none overflow-visible md:flex-row">
        {models.map((model) => (
          <Item key={model.name} variant="outline" className="flex min-w-0 flex-1 flex-col gap-3 p-3">
            <ItemHeader className="overflow-hidden rounded-md">
              <img
                src={model.image}
                alt={model.name}
                className="h-48 w-full rounded-md object-cover"
              />
            </ItemHeader>
            <ItemContent className="px-0 pb-0">
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Shell>
  ),
};
