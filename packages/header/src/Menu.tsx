import { /*getClassName,*/ IThemedProps } from "@cheaaa/theme";
import { memo /*, useMemo*/ } from "react";

// import { MenuItem } from "./MenuItem";
// import { useHeaderStyles, HeaderComponentNames } from "./styles";

interface IMenuProps extends Required<IThemedProps> {}

export const Menu = memo(
  ({ /*baseAppearance, appearance, menu,*/ onClick }: IMenuProps | any) => {
    // const classes = useHeaderStyles();

    // const classNames = useMemo(() => {
    //   const menuListClassName = getClassName<HeaderComponentNames>(
    //     classes,
    //     baseAppearance,
    //     appearance,
    //     "menuList"
    //   );

    //   return {
    //     menuListClassName,
    //   };
    // }, [classes, baseAppearance, appearance]);

    return (
      <div /*className={classNames.menuListClassName}*/>
        <button onClick={onClick}>++++</button>
        {/* {menu.map((item) => {
          return <MenuItem {...item} key={item.title} />;
        })} */}
      </div>
    );
  }
);
