import { Button } from './button';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';
import { Input } from './input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

export default {
  title: 'UI/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export const Basic = {
  render: () => (
    <ButtonGroup aria-label="Basic button group">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </ButtonGroup>
  ),
};

export const Separator = {
  render: () => (
    <ButtonGroup aria-label="Button group with separator">
      <Button>Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Copy</Button>
    </ButtonGroup>
  ),
};

export const Text = {
  render: () => (
    <ButtonGroup aria-label="Button group with text">
      <ButtonGroupText>Text</ButtonGroupText>
      <Input placeholder="Type something here..." className="w-56 rounded-none" />
      <Button>Save</Button>
    </ButtonGroup>
  ),
};

export const InputExample = {
  render: () => (
    <ButtonGroup aria-label="Input with buttons">
      <Button variant="outline">-</Button>
      <Input placeholder="Quantity" className="w-32 rounded-none text-center" />
      <Button variant="outline">+</Button>
    </ButtonGroup>
  ),
};

export const Vertical = {
  render: () => (
    <ButtonGroup orientation="vertical" aria-label="Vertical button group">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
};

export const PopoverExample = {
  render: () => (
    <Popover>
      <ButtonGroup aria-label="Button group with popover">
        <Button>Archive</Button>
        <ButtonGroupSeparator />
        <PopoverTrigger asChild>
          <Button variant="outline">More</Button>
        </PopoverTrigger>
      </ButtonGroup>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <p className="text-sm font-medium">Popover menu</p>
          <p className="text-sm text-muted-foreground">
            This is a reusable popover component that works with your button group.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const DropdownMenuExample = {
  render: () => (
    <DropdownMenu>
      <ButtonGroup aria-label="Button group with dropdown menu">
        <Button>follow</Button>
        <ButtonGroupSeparator />
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
      </ButtonGroup>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Archive</DropdownMenuItem>
        <DropdownMenuItem>Snooze</DropdownMenuItem>
        <DropdownMenuItem>Move to folder</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const SelectExample = {
  render: () => (
    <Select defaultValue="today">
      <ButtonGroup aria-label="Button group with select">
        <Button variant="outline">Filter</Button>
        <ButtonGroupSeparator />
        <SelectTrigger className="w-40 rounded-none border-0 shadow-none focus:ring-0">
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
      </ButtonGroup>
      <SelectContent>
        <SelectItem value="today">Today</SelectItem>
        <SelectItem value="week">This week</SelectItem>
        <SelectItem value="month">This month</SelectItem>
      </SelectContent>
    </Select>
  ),
};
