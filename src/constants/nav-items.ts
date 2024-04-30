interface NavItem {
  name: string;
  link: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Notes', link: '/' },
  { name: 'Archive', link: '/archive' },
  { name: 'Trash', link: '/trash' },
];

Object.freeze(NAV_ITEMS);

export default NAV_ITEMS;
