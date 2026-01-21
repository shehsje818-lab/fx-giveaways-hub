import { useCallback, useEffect, useRef, useState } from "react";

interface Cell {
  x: number;
  y: number;
  color: string;
  opacity: number;
}

const COLORS = [
  "hsl(270, 100%, 60%)", // Purple
  "hsl(280, 100%, 65%)", // Violet
  "hsl(320, 100%, 60%)", // Magenta
  "hsl(160, 100%, 50%)", // Cyan/Green
  "hsl(200, 100%, 60%)", // Blue
];

const CELL_SIZE = 80;

export const InteractiveGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cells, setCells] = useState<Map<string, Cell>>(new Map());
  const [isMouseDown, setIsMouseDown] = useState(false);

  const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  const getCellKey = (x: number, y: number) => `${x}-${y}`;

  const activateCell = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.floor((clientX - rect.left) / CELL_SIZE);
    const y = Math.floor((clientY - rect.top) / CELL_SIZE);
    const key = getCellKey(x, y);

    setCells((prev) => {
      const next = new Map(prev);
      next.set(key, {
        x,
        y,
        color: getRandomColor(),
        opacity: 1,
      });
      return next;
    });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isMouseDown) {
        activateCell(e.clientX, e.clientY);
      }
    },
    [isMouseDown, activateCell]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsMouseDown(true);
      activateCell(e.clientX, e.clientY);
    },
    [activateCell]
  );

  const handleMouseUp = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsMouseDown(false);
  }, []);

  // Fade out cells over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCells((prev) => {
        const next = new Map<string, Cell>();
        prev.forEach((cell, key) => {
          const newOpacity = cell.opacity - 0.02;
          if (newOpacity > 0) {
            next.set(key, { ...cell, opacity: newOpacity });
          }
        });
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Generate grid lines
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const updateGridSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setGridSize({
          cols: Math.ceil(rect.width / CELL_SIZE) + 1,
          rows: Math.ceil(rect.height / CELL_SIZE) + 1,
        });
      }
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-auto z-0"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "crosshair" }}
    >
      {/* Grid lines */}
      <svg className="absolute inset-0 w-full h-full">
        {/* Vertical lines */}
        {Array.from({ length: gridSize.cols }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * CELL_SIZE}
            y1={0}
            x2={i * CELL_SIZE}
            y2="100%"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
        {/* Horizontal lines */}
        {Array.from({ length: gridSize.rows }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * CELL_SIZE}
            x2="100%"
            y2={i * CELL_SIZE}
            stroke="hsl(var(--border))"
            strokeWidth="1"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* Active cells */}
      {Array.from(cells.values()).map((cell) => (
        <div
          key={getCellKey(cell.x, cell.y)}
          className="absolute transition-opacity duration-100"
          style={{
            left: cell.x * CELL_SIZE,
            top: cell.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: cell.color,
            opacity: cell.opacity * 0.8,
          }}
        />
      ))}
    </div>
  );
};
