// import assets below
import { IconType } from 'react-icons';
import { FaRegNoteSticky, FaRegBell, FaPencil } from 'react-icons/fa6';
import { FiArchive, FiTrash2 } from 'react-icons/fi';

interface NavItem {
  name: string;
  link: string;
  icon: IconType;
}

export const NAVBAR: NavItem[] = [
  { name: 'Notes', link: '/', icon: FaRegNoteSticky },
  { name: 'Reminders', link: '/reminders', icon: FaRegBell },
  { name: 'Edit Labels', link: '/edit-labels', icon: FaPencil },
  { name: 'Archive', link: '/archive', icon: FiArchive },
  { name: 'Trash', link: '/trash', icon: FiTrash2 },
];
