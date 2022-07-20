export const isActive = (value, currentActive) => value === currentActive;

/** copy from react-select start */
export function isDocumentElement(
  el: HTMLElement | typeof window
): el is typeof window {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

export function scrollTo(el: HTMLElement | typeof window, top: number): void {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);

    return;
  }

  el.scrollTop = top;
}

export function scrollIntoView(
  menuEl: HTMLElement | null,
  focusedEl: HTMLElement | null
): void {
  if (!menuEl || !focusedEl) return;

  const menuRect = menuEl.getBoundingClientRect();
  const focusedRect = focusedEl.getBoundingClientRect();
  const overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(
      menuEl,
      Math.min(
        focusedEl.offsetTop +
          focusedEl.clientHeight -
          menuEl.offsetHeight +
          overScroll,
        menuEl.scrollHeight
      )
    );
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

/** copy from react-select end */
