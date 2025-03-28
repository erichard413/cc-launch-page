import {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import "../styles/modals/Modal.css";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useMemo } from "react";

function Modal({
  setModalState,
  modalState,
  modalMessage = null,
  modalTitle = null,
  navTo = null,
  children,
}) {
  const prevIsOpen = useRef();
  const navigate = useNavigate();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setModalState(false);
  };
  useEffect(() => {
    prevIsOpen.current = modalState;
    const handleClick = e => {
      if (e.target.className == "overlay") {
        handleClose();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  useLayoutEffect(() => {
    if (!modalState && prevIsOpen.current) {
      setIsClosing(state => !state);
    }
    prevIsOpen.current = modalState;
  }, [modalState]);

  if (!modalState && !isClosing) return null;

  return createPortal(
    <>
      {(modalState || isClosing || prevIsOpen.current) && (
        <div className={`Modal ${isClosing ? "closing" : ""} `}>
          <div
            className="overlay"
            onAnimationEnd={() => {
              if (isClosing) {
                setIsClosing(false);
                if (navTo) navigate(navTo);
              }
            }}
          ></div>

          {Children.map(children, child => {
            if (!isValidElement(child)) return null;
            return cloneElement(child, {
              ...child.props,
              handleClose: handleClose,
            });
          })}
        </div>
      )}
    </>,
    document.body.querySelector("#modal-div")
  );
}

export default Modal;
