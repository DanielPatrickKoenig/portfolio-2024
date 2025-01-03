import './ModalContent.css';
const ModalContent = (props) => {
    return (
        <div className="modal-content">
            <div class="inner-modal-content">
                {props.children}
            </div>
            {props.onClose && (
                <button
                    className="close-button"
                    aria-label="close"
                    onClick={() => props.onClose()}
                />
            )}
        </div>
    )
}
export default ModalContent;