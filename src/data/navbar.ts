// import assets below
import { IconType } from 'react-icons';
import { FaRegNoteSticky, FaPencil } from 'react-icons/fa6';
import { FiTrash2 } from 'react-icons/fi';
import { BiArchiveIn } from 'react-icons/bi';

interface NavItem {
  name: string;
  link: string;
  icon: IconType;
}

export const NAVBAR: NavItem[] = [
  { name: 'Notes', link: '/', icon: FaRegNoteSticky },
  { name: 'Edit Labels', link: '/edit-labels', icon: FaPencil },
  { name: 'Archive', link: '/archive', icon: BiArchiveIn },
  { name: 'Trash', link: '/trash', icon: FiTrash2 },
];
