import { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  ariaLabel: string;
  type: 'button' | 'submit' | 'reset';
  tabIndex?: number;
}

const Button: FC<ButtonProperties> = ({
  ariaLabel,
  onClick,
  name,
  type = 'button',
  tabIndex = 0,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <button
      name={name}
      type={type}
      tabIndex={tabIndex}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button, ButtonProperties };
export default Button;
