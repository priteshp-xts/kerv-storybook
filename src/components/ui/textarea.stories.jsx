import { Button } from './button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from './field';
import { Textarea } from './textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const FieldExample = {
  render: () => (
    <FieldGroup className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <Textarea id="message" placeholder="Enter your message below." />
        <FieldDescription>Use the textarea to add longer text.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const ButtonExample = {
  render: () => (
    <div className="grid w-full max-w-md gap-4">
      <Textarea placeholder="Type your message..." />
      <div className="flex justify-end">
        <Button>Send message</Button>
      </div>
    </div>
  ),
};
