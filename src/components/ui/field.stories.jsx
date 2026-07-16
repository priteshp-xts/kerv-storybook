import * as React from 'react';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Input } from './input';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from './field';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export default {
  title: 'Components/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const InputField = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <Field>
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" placeholder="Evil Rabbit" />
        <FieldDescription>This appears on invoices and emails.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" placeholder="rabbit" aria-invalid />
        <FieldError>Choose another username.</FieldError>
      </Field>
    </div>
  ),
};

export const TextareaField = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
        <textarea
          id="feedback"
          rows="4"
          className="flex min-h-[96px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Share your thoughts about our service."
        />
        <FieldDescription>Let us know what we can improve.</FieldDescription>
      </Field>
    </div>
  ),
};

export const SelectField = {
  render: () => (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="department">Department</FieldLabel>
        <Select defaultValue="design">
          <SelectTrigger id="department">
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your department or area of work.</FieldDescription>
      </Field>
    </div>
  ),
};

export const CheckboxField = {
  render: () => (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <Checkbox id="desktop" />
        <div className="grid gap-1.5">
          <FieldLabel htmlFor="desktop">Show these items on the desktop</FieldLabel>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
        </div>
      </Field>
    </div>
  ),
};

export const RadioField = {
  render: () => (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Subscription Plan</FieldLegend>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <input type="radio" name="plan" defaultChecked className="h-4 w-4 accent-primary" />
            <div className="grid gap-1.5">
              <FieldLabel>Monthly ($9.99/month)</FieldLabel>
              <FieldDescription>Best for trying things out.</FieldDescription>
            </div>
          </Field>
          <Field orientation="horizontal">
            <input type="radio" name="plan" className="h-4 w-4 accent-primary" />
            <div className="grid gap-1.5">
              <FieldLabel>Yearly ($99.99/year)</FieldLabel>
              <FieldDescription>Most popular option.</FieldDescription>
            </div>
          </Field>
          <Field orientation="horizontal">
            <input type="radio" name="plan" className="h-4 w-4 accent-primary" />
            <div className="grid gap-1.5">
              <FieldLabel>Lifetime ($299.99)</FieldLabel>
              <FieldDescription>One-time purchase.</FieldDescription>
            </div>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const FieldGroupExample = {
  render: () => (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Responses</FieldLegend>
        <FieldDescription>Get notified when tasks or research finish.</FieldDescription>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="push" defaultChecked />
            <FieldContent>
              <FieldLabel htmlFor="push">Push notifications</FieldLabel>
              <FieldDescription>Receive alerts in your browser.</FieldDescription>
            </FieldContent>
          </Field>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Checkbox id="email" />
            <FieldContent>
              <FieldLabel htmlFor="email">Email notifications</FieldLabel>
              <FieldDescription>Receive a daily digest by email.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

export const ChoiceCardExample = {
  render: () => (
    <div className="w-full max-w-md">
      <FieldTitle>Compute environment</FieldTitle>
      <FieldDescription className="mb-4">Select the compute environment for your cluster.</FieldDescription>
      <FieldGroup>
        <FieldLabel className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50">
          <Checkbox id="k8s" className="mt-1" />
          <div className="grid gap-1.5">
            <span className="font-medium text-foreground">Kubernetes</span>
            <span className="text-sm text-muted-foreground">Run GPU workloads on a K8s cluster.</span>
          </div>
        </FieldLabel>
        <FieldLabel className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent/50">
          <Checkbox id="vm" className="mt-1" />
          <div className="grid gap-1.5">
            <span className="font-medium text-foreground">Virtual machine</span>
            <span className="text-sm text-muted-foreground">Access a cluster to run GPU workloads.</span>
          </div>
        </FieldLabel>
      </FieldGroup>
    </div>
  ),
};

export const FieldSetExample = {
  render: () => (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>This appears on invoices and emails.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" placeholder="Evil Rabbit" />
            <FieldDescription>This appears on invoices and emails.</FieldDescription>
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="handle">Username</FieldLabel>
            <Input id="handle" placeholder="rabbit" />
            <FieldError>Choose another username.</FieldError>
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="mt-4 flex gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Submit</Button>
      </div>
    </div>
  ),
};
