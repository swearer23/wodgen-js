import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SuccessToast = (message: String) => {
  toast.success(message, {
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
  })
}

export const ErrorToast = (message: String) => {
  toast.error(message, {
    autoClose: 3000,
    closeButton: false,
    hideProgressBar: true,
  })
}
