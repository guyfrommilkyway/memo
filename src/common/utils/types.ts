// import packages below
import { ReactElement, ReactNode } from 'react';

export type Component = JSX.Element | JSX.Element[] | ReactNode | ReactNode[] | ReactElement | ReactElement[];

export interface ChildrenProps {
  component?: Component;
  children?: string | Component;
}

export interface MetaProps {
  title: string;
  author?: string;
  description?: string;
  keywords?: string;
}

export interface ModalProps {
  header?: Component;
  body?: Component;
  footer?: Component;
  isOpen: boolean;
  onClose: () => void;
}
