import React from "react";

interface GridBackgroundProps {
  className?: string;
  gridSize?: string;
  opacity?: number;
  lineColor?: string;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({
  className = "",
  gridSize = "110px 110px",
  opacity = 40,
  lineColor = "rgba(255, 255, 255, 0.35)",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`.trim()}
      style={{
        opacity: opacity / 100,
        backgroundImage: `
          linear-gradient(to right, ${lineColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
        `,
        backgroundSize: gridSize,
      }}
    />
  );
};

export default GridBackground;
