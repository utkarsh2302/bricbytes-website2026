import { motion } from 'framer-motion';
import { useState } from 'react';

export function AnimatedParticles() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      offsetX: (Math.random() - 0.5) * 20,
      offsetY: (Math.random() - 0.5) * 20,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{ x: `${particle.x}%`, y: `${particle.y}%`, opacity: 0 }}
          animate={{
            x: `${particle.x + particle.offsetX}%`,
            y: `${particle.y + particle.offsetY}%`,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
