import { useEffect, useRef, useState } from "react";
import * as Toast from "../../../services/Toast";

const LEditModal = (props: ModalProps, { onConfirm }: any) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);
  const [shortDescription, setShortDescription] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<boolean>(false);
  const [packed, setPacked] = useState<boolean>(false);
  const toastId = useRef<any>();

  useEffect(() => {
    if (props.data?._id) {
      setTitle(props.data.title);
      setAuthor(props.data.author);
      setYear(props.data.year);
      setPages(props.data.pages);
      setShortDescription(props.data.shortDescription);
      setDescription(props.data.description);
      setStatus(props.data.status);
      setPacked(props.data.packed);
    }
  }, [props]);

  const notifySuccess = () => (toastId.current = Toast.successToast("Book succesfully created", "colored", 3000));

  const notifyError = () => (toastId.current = Toast.errorToast("Success", "colored", 3000));

  const confirm = () => {
    if (!props.data?._id) {
      const body: Book = {
        title: title,
        author: author,
        year: year,
        pages: pages,
        shortDescription: shortDescription,
        description: description,
        status: status,
        packed: packed,
      };
      fetch("http://localhost:8080/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          notifySuccess();
          props.onConfirm();
        })
        .catch((error) => notifyError());
    } else {
      const body: Book = {
        _id: props.data._id,
        title: title,
        author: author,
        year: year,
        pages: pages,
        shortDescription: shortDescription,
        description: description,
        status: status,
        packed: packed,
      };
      fetch("http://localhost:8080/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          props.onConfirm();
          notifySuccess();
        })
        .catch((error) => notifyError());
    }
  };

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
              {title}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    defaultValue={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Author</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Title</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(+e.target.value)}
                  />
                  <label htmlFor="floatingInput">Year</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="pages"
                    value={pages}
                    onChange={(e) => setPages(+e.target.value)}
                  />
                  <label htmlFor="floatingInput">Pages</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="sdescription"
                    defaultValue={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Short Description</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="ldescription"
                    rows={15}
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Long Description</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={packed}
                    onChange={(e) => setPacked(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Packed?
                  </label>
                </div>
                <div className="form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={status}
                    onChange={(e) => setStatus(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Read?
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-success" onClick={confirm} data-bs-dismiss="modal">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LEditModal;

interface ModalProps {
  onConfirm(): any;
  id: string;
  bookId?: string;
  labelledby: string;
  data?: Book;
}

interface Book {
  _id?: string;
  title: string;
  author: string;
  year: number;
  pages: number;
  shortDescription: string;
  description: string;
  status: boolean;
  packed: boolean;
}
