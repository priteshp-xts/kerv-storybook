import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';
import { Button } from './button';

function DialogStory({
  triggerLabel,
  title,
  description,
  cancelLabel,
  actionLabel,
  size,
  destructive,
  showMedia,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size={size}>
        <AlertDialogHeader className={showMedia ? 'sm:text-left' : undefined}>
          {showMedia ? <AlertDialogMedia aria-hidden="true">i</AlertDialogMedia> : null}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            className={
              destructive
                ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                : undefined
            }
          >
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
  argTypes: {
    triggerLabel: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    cancelLabel: { control: 'text' },
    actionLabel: { control: 'text' },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm'],
    },
    destructive: { control: 'boolean' },
    showMedia: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    triggerLabel: 'Open dialog',
    title: 'Are you sure?',
    description: 'This action cannot be undone.',
    cancelLabel: 'Cancel',
    actionLabel: 'Continue',
    size: 'default',
    destructive: false,
    showMedia: false,
  },
  render: (args) => <DialogStory {...args} />,
};

export const Small = {
  args: {
    triggerLabel: 'Show dialog',
    title: 'Delete item?',
    description: 'This action cannot be undone.',
    cancelLabel: 'Cancel',
    actionLabel: 'Delete',
    size: 'sm',
    destructive: true,
    showMedia: false,
  },
  render: (args) => <DialogStory {...args} />,
};

export const Medium = {
  args: {
    triggerLabel: 'Show dialog',
    title: 'Are you absolutely sure?',
    description:
      'This action cannot be undone. This will permanently delete your account from our servers.',
    cancelLabel: 'Cancel',
    actionLabel: 'Continue',
    size: 'default',
    destructive: false,
    showMedia: false,
  },
  render: (args) => <DialogStory {...args} />,
};

export const SmallWithMedia = {
  args: {
    triggerLabel: 'Show dialog',
    title: 'Share Project',
    description: 'Invite your team to collaborate on this project.',
    cancelLabel: 'Cancel',
    actionLabel: 'Share',
    size: 'sm',
    destructive: false,
    showMedia: true,
  },
  render: (args) => <DialogStory {...args} />,
};

export const Destructive = {
  args: {
    triggerLabel: 'Delete chat',
    title: 'Delete conversation?',
    description: 'This will permanently remove the chat history.',
    cancelLabel: 'Cancel',
    actionLabel: 'Delete',
    size: 'default',
    destructive: true,
    showMedia: false,
  },
  render: (args) => <DialogStory {...args} />,
};
