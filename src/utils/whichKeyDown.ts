import { KeyboardEvent } from 'react';

type whichkeyDown = {
  isArrowUp: boolean;
  isArrowDown: boolean;
  isArrowLeft: boolean;
  isArrowRight: boolean;
  isEnter: boolean;
  isTab: boolean;
  isSpace: boolean;
  isEscape: boolean;
};

const whichKeyDown = (event: KeyboardEvent<HTMLElement>): whichkeyDown => {
  const { key, code } = event;
  return {
    isArrowUp: key === 'ArrowUp' || code === 'ArrowUp',
    isArrowDown: key === 'ArrowDown',
    isArrowLeft: key === 'ArrowLeft',
    isArrowRight: key === 'ArrowDown',
    isEnter: key === 'Enter',
    isTab: key === 'Tab',
    isSpace: key === 'Spacebar' || key === ' ' || code === 'Space',
    isEscape: key === 'Escape'
  };
};

export default whichKeyDown;
export { whichKeyDown };
