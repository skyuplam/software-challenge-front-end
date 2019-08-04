import React from 'react';
import cn from 'clsx';


interface Props {
  className?: string;
  children?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
  onClick?: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
}
function Button({
  children, className, type, onClick,
}: Props) {
  return (
    <button
      className={cn('ButtonRoot', className)}
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
