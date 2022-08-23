import React, { MutableRefObject } from "react";

/**
 *
 * @param refs Массив рефов в которые необходимо записать содержимое возвращаемого рефа
 * @returns Реф, который передаём в ReactNode
 */
export function useCombinedRefs<T>(
  ...refs: (MutableRefObject<T> | undefined)[]
): MutableRefObject<T | null> {
  const targetRef = React.useRef<T>(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref || !targetRef.current) return;

      ref.current = targetRef.current;
    });
  }, [refs]);

  return targetRef;
}
