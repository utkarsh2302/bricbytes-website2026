import { motion } from 'framer-motion';

interface CityPinProps {
  city: string;
  lat: number;
  lng: number;
  color?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CityPin({ city, lat, lng, color = '#0071e3' }: CityPinProps) {
  return (
    <motion.div
      className="city-pin"
      style={{
        position: 'absolute',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 12px ${color}, 0 0 24px ${color}`,
        cursor: 'pointer',
        zIndex: 10,
      }}
      whileHover={{ scale: 1.4 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      title={city}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          border: `2px solid ${color}`,
          opacity: 0.6,
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
