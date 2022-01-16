import { ButtonHTMLAttributes } from 'react';

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  ariaLabel: string;
  type: 'button' | 'submit' | 'reset';
  tabIndex?: number;
}

export type { ButtonProperties };
