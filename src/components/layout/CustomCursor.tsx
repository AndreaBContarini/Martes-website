import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHoverableEnter = () => setIsHovering(true);
    const handleHoverableLeave = () => setIsHovering(false);

    // Track mouse position
    window.addEventListener('mousemove', updatePosition);

    // Track hoverable elements
    const hoverableElements = document.querySelectorAll('.hoverable');
    hoverableElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverableEnter);
      el.addEventListener('mouseleave', handleHoverableLeave);
    });

    // Add hovering class to body
    if (isHovering) {
      document.body.classList.add('hovering');
    } else {
      document.body.classList.remove('hovering');
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverableEnter);
        el.removeEventListener('mouseleave', handleHoverableLeave);
      });
    };
  }, [isHovering]);

  return (
    <>
      <div
        className="cursor-dot hidden lg:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: '#4ade80', // Ensure it is green (emerald-400)
        }}
      />
    </>
  );
};
