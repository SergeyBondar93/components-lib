export interface IFormFieldComponentProps {
  onChange: (...args: any[]) => void;
  onBlur?: (...args: any[]) => void;
  invalid?: boolean;
  error?: string | string[];
  value: any;
}
