import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@cheaaa/button";
import { getClassName } from "@cheaaa/theme";

import { ComponentNames, useStyles } from "./styles";

export const PartnersBlock = ({
  baseAppearance,
  appearance,
  partnersCountAnimationTime,
  partnersCount: partnersCountProps = 6079,
  becomePartnerLink,
  becomePartnerButtonProps,
  signInAccountLink,
  signInAccountButtonProps,
}: any) => {
  const classes = useStyles();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [partnersCount, setPartnersCount] = useState(
    parseFloat(partnersCountAnimationTime) ? 0 : partnersCountProps
  );

  const rafsRef = useRef<any>([]);

  useEffect(() => {
    const steps = parseFloat(partnersCountAnimationTime) * 60;

    const step = partnersCountProps / steps;

    const rafFn = () => {
      setPartnersCount((prevCount) => {
        const newCount = Math.min(prevCount + step, partnersCountProps);

        if (newCount < partnersCountProps) {
          const raf = requestAnimationFrame(rafFn);

          rafsRef.current.push(raf);
        }

        return Number(newCount.toFixed(0));
      });
    };

    const observer = new IntersectionObserver(
      ([{ intersectionRatio }]) => {
        if (intersectionRatio) {
          requestAnimationFrame(rafFn);
        }
      },
      { root: null, threshold: 1.0 }
    );
    observer.observe(wrapperRef.current!);

    return () => {
      rafsRef.current.forEach((raf) => {
        cancelAnimationFrame(raf);
      });
      wrapperRef.current && observer.unobserve(wrapperRef.current);
      observer.disconnect();
    };
  }, [partnersCountProps, partnersCountAnimationTime]);

  const classNames = useMemo(() => {
    const partnerBlockWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnerBlockWrapper"
    );
    const partnersCountWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersCountWrapper"
    );
    const partnersCountClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersCount"
    );
    const partnersCountTextClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersCountText"
    );
    const partnersInfoWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersInfoWrapper"
    );
    const partnersInfoIconWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersInfoIconWrapper"
    );
    const partnersInfoTextClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersInfoText"
    );
    const partnersButtonsWrapperClassName = getClassName<ComponentNames>(
      classes,
      baseAppearance,
      appearance,
      "partnersButtonsWrapper"
    );

    return {
      partnerBlockWrapperClassName,
      partnersCountWrapperClassName,
      partnersCountClassName,
      partnersCountTextClassName,
      partnersInfoWrapperClassName,
      partnersInfoIconWrapperClassName,
      partnersInfoTextClassName,
      partnersButtonsWrapperClassName,
    };
  }, [classes, baseAppearance, appearance]);

  return (
    <div className={classNames.partnerBlockWrapperClassName} ref={wrapperRef}>
      <div className={classNames.partnersCountWrapperClassName}>
        <span className={classNames.partnersCountClassName}>
          {Intl.NumberFormat("ru").format(partnersCount)}
        </span>
        <br />
        <span className={classNames.partnersCountTextClassName}>
          Подключилось партнеров
        </span>
      </div>

      <span className={classNames.partnersInfoWrapperClassName}>
        <span className={classNames.partnersInfoIconWrapperClassName}>
          <svg
            width="4"
            height="11"
            viewBox="0 0 4 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.63 6.58H2.87L3.5 4.06V0H0V4.06L0.63 6.58ZM1.75 10.36C2.772 10.36 3.36 9.772 3.36 8.96C3.36 8.148 2.772 7.56 1.75 7.56C0.728 7.56 0.14 8.148 0.14 8.96C0.14 9.772 0.728 10.36 1.75 10.36Z"
              fill="#F54B92"
            ></path>
          </svg>
        </span>
        <span className={classNames.partnersInfoTextClassName}>
          Если у вас есть сайт, блог, форум о туризме, группа в социальной сети
          или вы представляете туристическое агентство – зарабатывайте на
          продаже страховых полисов своим клиентам.
        </span>
      </span>

      <div className={classNames.partnersButtonsWrapperClassName}>
        {/* TODO если ссылка будет на текущем проекте то лучше изменить href на to и дать component={Link} из react-router-dom */}
        <Button href={becomePartnerLink} {...becomePartnerButtonProps}>
          Стать партнером
        </Button>
        <Button href={signInAccountLink} {...signInAccountButtonProps}>
          Войти в личный кабинет
        </Button>
      </div>
    </div>
  );
};
