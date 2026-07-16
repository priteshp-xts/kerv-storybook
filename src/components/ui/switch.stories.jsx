import { FieldContent, FieldGroup } from './field';
import { Switch } from './switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Default = {
  render: () => <Switch defaultChecked />,
};

export const ChoiceCard = {
  render: () => (
    <FieldGroup className="w-full max-w-md">
      <label
        htmlFor="share-across-devices"
        className="flex cursor-pointer items-center justify-between rounded-lg border border-border p-4"
      >
        <FieldContent className="space-y-1">
          <div className="text-sm font-medium leading-none">Share across devices</div>
          <div className="text-sm text-muted-foreground">
            Focus is shared across devices, and turns off when you leave the app.
          </div>
        </FieldContent>
        <Switch id="share-across-devices" defaultChecked />
      </label>
    </FieldGroup>
  ),
};
