import { motion } from 'framer-motion';

export function AnimatedLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-15"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      style={{ pointerEvents: 'none' }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071e3" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Diagonal animated lines */}
      <motion.line
        x1="0"
        y1="0"
        x2="800"
        y2="600"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
      />

      <motion.line
        x1="800"
        y1="0"
        x2="0"
        y2="600"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
      />

      {/* Horizontal animated lines */}
      <motion.line
        x1="0"
        y1="200"
        x2="800"
        y2="200"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        initial={{ strokeDasharray: 800, strokeDashoffset: 800 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 1.5 }}
      />

      <motion.line
        x1="0"
        y1="400"
        x2="800"
        y2="400"
        stroke="url(#lineGradient)"
        strokeWidth="1"
        initial={{ strokeDasharray: 800, strokeDashoffset: 800 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 2.5, delay: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
      />
    </svg>
  );
}
