import '../styles/modal.css';

const InfoModal = ({ handleClose, modal_show, children }) => {
    const showHideClassName = modal_show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default InfoModal;