const alertClasses = {
  success: "alert-success",
  error: "alert-error",
  warning: "alert-warning",
  info: "alert-info",
};

const ToastMsg = ({ alertType = "info", message }) => {

  if (!message) return null;

  return ( 
    <div className="toast toast-top toast-center z-50">
      <div className={`alert ${alertClasses[alertType]}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ToastMsg;
