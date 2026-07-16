import * as React from 'react';
import { Button } from './button';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from './popover';
import { Field, FieldGroup, FieldLabel } from './field';
import { Input } from './input';

export default {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open Popover1</PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Popover title</PopoverTitle>
          <PopoverDescription>
            This is a simple popover with a title and description.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
};

export const Align = {
  render: () => (
    <div className="flex flex-col items-center gap-6">
      {['start', 'center', 'end'].map((align) => (
        <Popover key={align}>
          <PopoverTrigger render={<Button variant="outline" />}>
            {align[0].toUpperCase() + align.slice(1)}
          </PopoverTrigger>
          <PopoverContent align={align} className="w-72">
            <PopoverHeader>
              <PopoverTitle>{align} aligned</PopoverTitle>
              <PopoverDescription>
                The content panel can align to the trigger in three positions.
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithForm = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open Popover</PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Edit profile</PopoverTitle>
          <PopoverDescription>Make changes to your profile here.</PopoverDescription>
        </PopoverHeader>
        <FieldGroup className="mt-4">
          <Field>
            <FieldLabel htmlFor="popover-name">Name</FieldLabel>
            <Input id="popover-name" defaultValue="Pedro Duarte" />
          </Field>
          <Field>
            <FieldLabel htmlFor="popover-username">Username</FieldLabel>
            <Input id="popover-username" defaultValue="@peduarte" />
          </Field>
          <div className="flex justify-end">
            <Button type="button">Save</Button>
          </div>
        </FieldGroup>
      </PopoverContent>
    </Popover>
  ),
};
