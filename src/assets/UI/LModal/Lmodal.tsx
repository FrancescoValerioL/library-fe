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
                <div className="col">{props.data && props.data.author}</div>
                <div className="col">{props.data && props.data.shortDescription}</div>
                <div className="col">{props.data && props.data.year}</div>
              </div>
              <div className="row">
                <div className="col">{props.data && props.data.description}</div>
              </div>
              <div className="row">
                <div className="col">{props.data && props.data.pages}</div>
                <div className="col">{props.data && props.data.status}</div>
                <div className="col">{props.data && props.data.packed ? "packed" : "not packed"}</div>
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
    status: string;
    packed: boolean;
  };
}
