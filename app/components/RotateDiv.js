import React, { useState } from 'react';

const RotateDiv = () => {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setInitialPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (!isDragging) return;

    const deltaX = e.clientX - initialPosition.x;
    const deltaY = e.clientY - initialPosition.y;

    const newRotation = rotation + deltaX;
    setRotation(newRotation);

    setInitialPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="rotation-btn bg-black text-white p-4 rounded"
      style={{
        transform: `rotate(${rotation}deg)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      Drag and rotate me
    </div>
  );
};

export default RotateDiv;
