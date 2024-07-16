const LEditModal = (props: ModalProps) => {
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
              {props.title}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="author" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Author</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="title" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Title</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="year" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Year</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="pages" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Pages</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="sdescription" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Short Description</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <textarea className="form-control" id="ldescription" placeholder="name@example.com" rows={5} />
                  <label htmlFor="floatingInput">Long Description</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-check-inline">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Packed?
                  </label>
                </div>
                <div className="form-check-inline">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
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
            <button type="button" className="btn btn-success">
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
  id: string;
  bookId?: string;
  labelledby: string;
  title: string;
  data: string;
}
