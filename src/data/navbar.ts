// assets
import { MdNoteAlt, MdDelete, MdArchive } from 'react-icons/md';

export const NAVBAR: NavItem[] = [
  { name: 'Notes', link: '/', icon: MdNoteAlt },
  { name: 'Archive', link: '/archive', icon: MdArchive },
  { name: 'Trash', link: '/trash', icon: MdDelete },
];
