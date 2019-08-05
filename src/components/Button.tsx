import React from 'react';
import cn from 'clsx';
import './Button.css';


interface Props {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
  icon?: boolean;
}
function Button({
  children, className, type, onClick, icon,
}: Props) {
  return (
    <button
      className={cn('ButtonRoot', { ButtonIcon: icon }, className)}
      type={type || 'button'}
      onClick={onClick}
    >
      <div className="ButtonContent">
        {children}
      </div>
    </button>
  );
}

export default Button;
