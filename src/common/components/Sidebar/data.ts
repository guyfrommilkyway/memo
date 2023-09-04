interface NavItem {
  name: string;
  link: string;
}

export const NAVBAR: NavItem[] = [
  { name: 'Notes', link: '/' },
  { name: 'Reminders', link: '/reminders' },
  { name: 'Quick Notes', link: '/quick-notes' },
  { name: 'Edit Labels', link: '/edit-labels' },
  { name: 'Archive', link: '/archive' },
  { name: 'Trash', link: '/trash' },
];
