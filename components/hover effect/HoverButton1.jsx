import React from 'react';
import useMouseFollow from './useMouseFollow';

const HoverButton1 = ({ text = '', type = '', icon: Icon = null }) => {
  const {
    position,
    isHovered,
    spanRef,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  } = useMouseFollow();

  return (
      <button type={type} className="HOVER"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        <span
          ref={spanRef}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        />
        <p className='flex gap-2 items-center'>
        {Icon && <Icon/>}
        <text>{text}</text>
        </p>
      </button>
    );
};

export default HoverButton1;