type Component =
  | (() => JSX.Element | JSX.Element[])
  | JSX.Element
  | JSX.Element[]
  | MyReactNode;

interface ChildrenProps {
  component?: Component;
  children?: string | Component;
}

interface MetaProps {
  title: string;
  author?: string;
  description?: string;
  keywords?: string;
}

interface ModalProps {
  header?: Component;
  body?: Component;
  footer?: Component;
  isOpen: boolean;
  onClose: () => void;
}
