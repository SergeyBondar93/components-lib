import { MutableRefObject, useEffect } from "react";

export const useClickOutsideComponents = (
  refs: MutableRefObject<any>[],
  handleClick: (e: MouseEvent | TouchEvent) => void
): void => {
  useEffect(() => {
    const handleClickOutsideComponent = (
      event: MouseEvent | TouchEvent
    ): void => {
      if (
        refs.every((ref) => ref.current && !ref.current.contains(event.target))
      ) {
        handleClick(event);
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
