import { useEffect } from "react";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LDeleteModal = (props: DeleteModalProps) => {
  const deleteItem = () => {
    fetch("http://localhost:8080/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: props._id }),
    })
      .then((response) => {
        notifySuccess();
        props.onConfirm();
      })
      .catch((error) => notifyError());
  };

  const notifySuccess = () =>
    toast.success("Book Deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });

  const notifyError = () =>
    toast.error("Book Deleted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    });

  return (
    <div
      className="modal fade modal-lg"
      id={props.id}
      tabIndex={-1}
      aria-labelledby={props.labelledby}
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Delete Book?
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">Are you sure you want to delete this book from the list? This is definitive</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-danger" onClick={deleteItem} data-bs-dismiss="modal">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LDeleteModal;

interface DeleteModalProps {
  onConfirm(): any;
  id: string;
  labelledby: string;
  _id: string;
}
