function Modal() {
  return (
    <div>
      <button type="button" className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#confirmationModal">
        Confirm
      </button>
      <div className="modal fade" id="confirmationModal" tabIndex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmationModalLabel">
                Confirmation
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">Do you confirm that you are sure about this action?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                No, Go Back
              </button>
              <button type="submit" className="btn btn-primary">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
