import { useEffect } from "react";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Counted so stacked dialogs (style detail → full preview) restore page scroll
// only when the last one closes, whatever order they unmount in.
let scrollLocks = 0;
let savedOverflow = "";

const lockScroll = () => {
  if (scrollLocks++ === 0) {
    savedOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
};

const unlockScroll = () => {
  if (--scrollLocks === 0) document.body.style.overflow = savedOverflow;
};

// Modal behaviour: lock page scroll, move focus in, close on Escape and keep
// Tab inside `ref`. While `pausedRef.current` is true (a dialog stacked on top
// is open) keyboard handling is left to that dialog.
export const useModal = (ref, onClose, { initialFocusRef, pausedRef } = {}) => {
  useEffect(() => {
    lockScroll();
    (initialFocusRef?.current || ref.current)?.focus();

    const onKeyDown = (e) => {
      if (pausedRef?.current || !ref.current) return;
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const items = [...ref.current.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      unlockScroll();
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);
};
