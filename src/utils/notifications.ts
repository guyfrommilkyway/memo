// packages
import { toast } from 'react-toastify';

const toastSuccess = (message: string) =>
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

const toastError = (message: string) =>
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });

export { toastSuccess, toastError };
