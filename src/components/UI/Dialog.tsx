interface IDialogProps {
  children: React.ReactNode;
  setIsShow(isShow: boolean): void;
}

function Dialog({ children, setIsShow }: IDialogProps): JSX.Element {
  function closeDialog() {
    setIsShow(false);
  }

  return (
    <div
      className="product-dialog modal"
      tabIndex={-1}
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeDialog}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
