import { GenerateId } from "jss";
import { ReactNode } from "react";
import { JssProvider } from "react-jss";

const generateId: GenerateId = ({ key }, styleSheet) => {
  if (!styleSheet?.options.classNamePrefix) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "classNamePrefix not passed in some createUseStyles function"
      );
    }
  }

  return styleSheet?.options.classNamePrefix + key;
};

interface ICheJssProviderProps {
  /**
   * Префикс перед всеми классами
   * @default "che-"
   */
  classNamePrefix?: string;
  children: ReactNode;
}

export const CheJssProvider = ({
  classNamePrefix = "che-",
  children,
}: ICheJssProviderProps) => {
  return (
    <JssProvider classNamePrefix={classNamePrefix} generateId={generateId}>
      {children}
    </JssProvider>
  );
};
