import { MutableRefObject, useEffect } from "react";

/**
 *
 * @param refs Массив рефов при клике на которые callback не срабатывает
 * @param handleClick Callback который должен сработать если кликнули не по одному из переданных элементов в рефах
 */
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
