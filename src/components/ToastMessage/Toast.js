import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss'
function Toast() {
  return <>
        <ToastContainer
          autoClose={1800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
    </>
}

export default Toast