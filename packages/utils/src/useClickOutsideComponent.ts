import { MutableRefObject, useEffect } from "react";

export const useClickOutsideComponent = (
  ref: MutableRefObject<any>,
  handleClick: () => void
): void => {
  useEffect(() => {
    const handleClickOutsideComponent = (
      event: MouseEvent | TouchEvent
    ): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideComponent);
    document.addEventListener("touchstart", handleClickOutsideComponent);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutsideComponent);
      document.removeEventListener("touchstart", handleClickOutsideComponent);
    };
  }, [handleClick]);
};
