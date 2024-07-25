const LModal = (props: ModalProps) => {
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
              {props.data && props.data.title}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Author</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">{props.data && props.data.author}</div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Published</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">{props.data && props.data.year}</div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Pages</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">{props.data && props.data.pages}</div>
                    </div>
                  </div>
                </div>
                <div className="row"></div>
                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Description</strong>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">{props.data && props.data.description}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Read</strong>
                      </div>
                    </div>
                    <div className="row">
                      {props.data && props.data.status === true ? (
                        <i className="bi bi-check-circle text-success" style={{ fontSize: "1.5rem" }}></i>
                      ) : (
                        <i className="bi bi-x-square text-danger" style={{ fontSize: "1.5rem" }}></i>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="container text-center">
                    <div className="row">
                      <div className="col">
                        <strong>Packed</strong>
                      </div>
                    </div>
                    <div className="row">
                      {props.data && props.data.packed === true ? (
                        <i className="bi bi-check-circle text-success" style={{ fontSize: "1.5rem" }}></i>
                      ) : (
                        <i className="bi bi-x-square text-danger" style={{ fontSize: "1.5rem" }}></i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-info" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LModal;

interface ModalProps {
  id: string;
  labelledby: string;
  data?: {
    title: string;
    author: string;
    year: number;
    pages: number;
    shortDescription: string;
    description: string;
    status: boolean;
    packed: boolean;
  };
}
