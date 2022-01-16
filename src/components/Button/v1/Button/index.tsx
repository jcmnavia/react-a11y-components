import { FC } from 'react';
import { ButtonProperties } from './interfaces';

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
      style={{ fontSize: '24px', background: 'yellow' }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProperties };
export default Button;
