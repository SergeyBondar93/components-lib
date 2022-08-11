import { useEffect, useState } from "react";

import { BREAKPOINTS } from "./utils";

export const useScreenSizes = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = windowSize;

  const xs = width < BREAKPOINTS.sm;
  const sm = width >= BREAKPOINTS.sm && width < BREAKPOINTS.md;
  const md = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
  const lg = width >= BREAKPOINTS.lg && width < BREAKPOINTS.xl;
  const xl = width >= BREAKPOINTS.xl && width < BREAKPOINTS.xxl;
  const xxl = width >= BREAKPOINTS.xxl;

  const isMobile = width < BREAKPOINTS.md;
  const isDesktop = !isMobile;

  return { width, height, xs, sm, md, lg, xl, xxl, isMobile, isDesktop };
};
