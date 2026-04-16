import { motion } from 'framer-motion';

export function AnimatedGrid() {
  const gridSize = 12;
  const cellSize = 40;

  return (
    <svg
      width={gridSize * cellSize}
      height={gridSize * cellSize}
      className="absolute inset-0 opacity-20"
      viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`}
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
        </linearGradient>
      </defs>

      {Array.from({ length: gridSize }).map((_, i) => (
        <motion.line
          key={`h-${i}`}
          x1="0"
          y1={i * cellSize}
          x2={gridSize * cellSize}
          y2={i * cellSize}
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
      {Array.from({ length: gridSize }).map((_, i) => (
        <motion.line
          key={`v-${i}`}
          x1={i * cellSize}
          y1="0"
          x2={i * cellSize}
          y2={gridSize * cellSize}
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}
