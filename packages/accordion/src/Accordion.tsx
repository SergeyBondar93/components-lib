import { BaseAccordion, IBaseAccordionProps } from "./BaseAccordion";
import { DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE, useStyles } from "./styles";

export interface IAccordionProps
  extends Omit<
    IBaseAccordionProps,
    "classes" | "defaultTitleButtonAppearance"
  > {}

export const Accordion = (props: IAccordionProps) => {
  const classes = useStyles();

  return (
    <BaseAccordion
      {...props}
      classes={classes}
      defaultTitleButtonAppearance={DEFAULT_ACCORDION_TITLE_BUTTON_APPEARANCE}
    />
  );
};
