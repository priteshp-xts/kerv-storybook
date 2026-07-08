import * as React from 'react';
import { Badge } from './badge';
import { Button } from './button';
import { ButtonGroup } from './button-group';
import { Checkbox } from './checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldGroupRow,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => <Input className="w-full max-w-sm" placeholder="Enter text" />,
};

export const FieldExample = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="shadcn" />
        <FieldDescription>Choose a unique username for your account.</FieldDescription>
      </Field>
    </div>
  ),
};

export const FieldGroupExample = {
  render: () => (
    <div className="w-full max-w-md">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input id="name" placeholder="Evil Rabbit" />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="rabbit@example.com" />
          <FieldDescription>We&apos;ll send updates to this address.</FieldDescription>
        </Field>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Reset
          </Button>
          <Button type="button">Submit</Button>
        </div>
      </FieldGroup>
    </div>
  ),
};

export const Disabled = {
  render: () => (
    <div className="w-full max-w-md">
      <Field data-disabled>
        <FieldLabel htmlFor="disabled-email">Email</FieldLabel>
        <Input id="disabled-email" disabled placeholder="disabled@example.com" />
        <FieldDescription>This field is currently disabled.</FieldDescription>
      </Field>
    </div>
  ),
};

export const Invalid = {
  render: () => (
    <div className="w-full max-w-md">
      <Field data-invalid>
        <FieldLabel htmlFor="invalid-input">Invalid Input</FieldLabel>
        <Input id="invalid-input" aria-invalid placeholder="Invalid entry" />
        <FieldError>This field contains validation errors.</FieldError>
      </Field>
    </div>
  ),
};

export const File = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="picture">Picture</FieldLabel>
        <Input id="picture" type="file" />
        <FieldDescription>Select a picture to upload.</FieldDescription>
      </Field>
    </div>
  ),
};

export const Inline = {
  render: () => (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="search" className="w-20 shrink-0">
          Search
        </FieldLabel>
        <Input id="search" placeholder="Search..." />
        <Button type="button">Go</Button>
      </Field>
    </div>
  ),
};

export const Grid = {
  render: () => (
    <div className="w-full max-w-2xl">
      <FieldGroupRow>
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input id="first-name" placeholder="Evil" />
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input id="last-name" placeholder="Rabbit" />
        </Field>
      </FieldGroupRow>
    </div>
  ),
};

export const Required = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="required-field">
          Required Field <span className="text-destructive">*</span>
        </FieldLabel>
        <Input id="required-field" required placeholder="Required input" />
        <FieldDescription>This field must be filled out.</FieldDescription>
      </Field>
    </div>
  ),
};

export const BadgeExample = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="webhook">
          Webhook URL <Badge variant="secondary" className="ml-2 align-middle">
            Beta
          </Badge>
        </FieldLabel>
        <Input id="webhook" placeholder="https://example.com/webhook" />
      </Field>
    </div>
  ),
};

export const ButtonGroupExample = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="search-with-buttons">Search</FieldLabel>
        <ButtonGroup aria-label="Search button group">
          <Input id="search-with-buttons" className="rounded-r-none" placeholder="Search..." />
          <Button type="button" className="rounded-l-none">
            Search
          </Button>
        </ButtonGroup>
      </Field>
    </div>
  ),
};

export const Form = {
  render: () => (
    <div className="w-full max-w-2xl">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>Complete your profile information below.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Name</FieldLabel>
            <Input id="form-name" placeholder="Evil Rabbit" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Email</FieldLabel>
            <Input id="form-email" type="email" placeholder="rabbit@example.com" />
            <FieldDescription>We&apos;ll never share your email with anyone.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" placeholder="+1 555 123 4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="form-address">Address</FieldLabel>
            <Input id="form-address" placeholder="123 Main St" />
          </Field>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="button">Submit</Button>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const CheckboxExample = {
  render: () => (
    <div className="w-full max-w-md">
      <Field orientation="horizontal" className="items-start">
        <Checkbox id="check-notify" className="mt-1" />
        <div className="grid gap-1.5">
          <FieldLabel htmlFor="check-notify">Show notifications</FieldLabel>
          <FieldDescription>Enable notification previews in the app.</FieldDescription>
        </div>
      </Field>
    </div>
  ),
};
