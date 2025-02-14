import React from 'react';
import useMouseFollow from './useMouseFollow';
import Link from 'next/link';

const HoverButton = ({ text = '', link = '', icon: Icon = null, onClick = null }) => {
  const {
    position,
    isHovered,
    spanRef,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = useMouseFollow();

  const buttonContent = (
    <>
      <span
        ref={spanRef}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <p className="flex text-btn gap-2 items-center">
        {Icon && <Icon />}
        <b className="font-medium">{text}</b>
      </p>
    </>
  );

  return link ? (
    <Link href={link} className="HOVER" rel="noopener noreferrer">
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      className="HOVER"
    >
      {buttonContent}
    </button>
  );
};

export default HoverButton;
