import { Badge } from './badge';
import { Button } from './button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';

export default {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle className="text-base">Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
        <CardAction>
          <Badge className="w-fit">Live</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Storybook preview of the card component with header, content, footer, and action.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Size = {
  render: () => (
    <Card size="sm" className="w-[360px]">
      <CardHeader>
        <CardTitle className="text-base">Scheduled reports</CardTitle>
        <CardDescription>Weekly snapshots. No more manual exports.</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Choose a schedule (daily, or weekly).</li>
          <li>Send to channels or specific teammates.</li>
          <li>Include charts, tables, and key metrics.</li>
        </ul>
      </CardContent>
      <CardFooter className="justify-between gap-2">
        <Button variant="outline">See what&apos;s new</Button>
        <Button>Set up reports</Button>
      </CardFooter>
    </Card>
  ),
};

export const Spacing = {
  render: () => (
    <Card className="w-[360px]" style={{ '--card-spacing': '1.5rem' }}>
      <CardHeader>
        <CardTitle className="text-base">Terms of Service</CardTitle>
        <CardDescription>Review the terms before accepting the agreement.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          These terms govern your use of the workspace, including access to shared documents, project files,
          and collaboration tools.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Decline</Button>
        <Button>Accept</Button>
      </CardFooter>
    </Card>
  ),
};

export const Image = {
  render: () => (
    <Card className="w-[360px]">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
        alt="Event cover"
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-base">Design systems meetup</CardTitle>
        <CardDescription>
          A practical talk on component APIs, accessibility, and shipping faster.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-end">
        <Button>View Event</Button>
      </CardFooter>
    </Card>
  ),
};
