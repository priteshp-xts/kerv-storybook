import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from './hover-card';

export default {
  title: 'Components/Hover Card',
  component: HoverCard,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

function HoverCardPanel({
  title = 'The React Framework',
  description = 'Created and maintained by @vercel. Built to scale with modern React.',
  arrow = false,
}) {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {arrow ? <HoverCardArrow className="fill-background" /> : null}
    </div>
  );
}

export const Basic = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
        Hover here
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardPanel />
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Sides = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {['left', 'top', 'bottom', 'right'].map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <HoverCardPanel title={`Side: ${side}`} />
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
};

export const Align = {
  render: () => (
    <div className="flex items-center gap-6">
      <HoverCard>
        <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
          Start
        </HoverCardTrigger>
        <HoverCardContent side="top" align="start">
          <HoverCardPanel title="Align: start" />
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
          Center
        </HoverCardTrigger>
        <HoverCardContent side="top" align="center">
          <HoverCardPanel title="Align: center" />
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
          End
        </HoverCardTrigger>
        <HoverCardContent side="top" align="end">
          <HoverCardPanel title="Align: end" />
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

export const ArrowExample = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger href="#" className="text-sm font-medium text-primary underline-offset-4 hover:underline" onClick={(event) => event.preventDefault()}>
        Hover with arrow
      </HoverCardTrigger>
      <HoverCardContent side="top" align="center">
        <div className="space-y-2">
          <p className="text-sm font-semibold">Hover card with arrow</p>
          <p className="text-sm text-muted-foreground">Use HoverCardArrow to point the card at the trigger.</p>
        </div>
        <HoverCardArrow className="fill-background" />
      </HoverCardContent>
    </HoverCard>
  ),
};

export const ButtonTrigger = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm"
        onClick={(event) => event.preventDefault()}
      >
        Hover trigger
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardPanel description="The trigger can wrap a button-like element as a link-style trigger." />
      </HoverCardContent>
    </HoverCard>
  ),
};
