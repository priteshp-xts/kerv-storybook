import * as React from 'react';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from './menubar';

export default {
  title: 'Components/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

function FileIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2v5h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FolderIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19.4 15a7.9 7.9 0 0 0 .1-6l2-1.2-2-3.4-2.3.7a8.3 8.3 0 0 0-5.2-3L11.5 0h-3L8 2.1a8.3 8.3 0 0 0-5.2 3l-2.3-.7-2 3.4 2 1.2a7.9 7.9 0 0 0 .1 6l-2 1.2 2 3.4 2.3-.7a8.3 8.3 0 0 0 5.2 3L8.5 24h3l.5-2.1a8.3 8.3 0 0 0 5.2-3l2.3.7 2-3.4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Shell({ children }) {
  return <div className="w-full max-w-4xl">{children}</div>;
}

export const Basic = {
  render: () => (
    <Shell>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New Tab <MenubarShortcut>Cmd+T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Share</MenubarItem>
              <MenubarItem>Print</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Toggle Fullscreen</MenubarItem>
            <MenubarItem>Minimize</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Shell>
  ),
};

export const Checkbox = {
  render: () => (
    <Shell>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Bookmarks</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Shell>
  ),
};

export const Submenu = {
  render: () => (
    <Shell>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileIcon className="mr-2 h-4 w-4" />
              New File
            </MenubarItem>
            <MenubarItem>
              <FolderIcon className="mr-2 h-4 w-4" />
              New Folder
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>project-alpha</MenubarItem>
                <MenubarItem>site-redesign</MenubarItem>
                <MenubarItem>marketing-q3</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Shell>
  ),
};

export const WithIcons = {
  render: () => (
    <Shell>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Projects</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileIcon className="mr-2 h-4 w-4" />
              Documents
            </MenubarItem>
            <MenubarItem>
              <FolderIcon className="mr-2 h-4 w-4" />
              Assets
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <SettingsIcon className="mr-2 h-4 w-4" />
              Settings
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </Shell>
  ),
};
