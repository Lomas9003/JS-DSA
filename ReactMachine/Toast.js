import { useState, useRef } from "react";

const ToastContainer = () => {
  const [toast, setToast] = useState([]);
  const inputRef = useRef({});
  console.log(inputRef);

  const handelClose = (id) => {
    clearTimeout(inputRef.current[id]);
    delete inputRef.current[id];
    setToast((pre) => pre.filter((toast) => toast.id !== id));
  };

  const handelToast = (message, type) => {
    const id = Date.now();
    const newToast = [...toast, { id, message, type }];
    setToast(newToast);

    inputRef.current[id] = setTimeout(() => handelClose(id), 5000);
  };
  return (
    <div className="conatiner">
      <div className="toast-conatiner">
        {toast.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toastMessage ${type}`}>
              {message} <span onClick={() => handelClose(id)}>X</span>
            </div>
          );
        })}
      </div>
      <div className="toast-btn ">
        <button onClick={() => handelToast("Succsses", "Sucsses")}>
          Sucsses
        </button>
        <button onClick={() => handelToast("Info", "info")}>Info</button>
        <button onClick={() => handelToast("Warning", "warning")}>
          Warning
        </button>
        <button onClick={() => handelToast("Error", "error")}>Error</button>
      </div>
    </div>
  );
};

export default ToastContainer;
