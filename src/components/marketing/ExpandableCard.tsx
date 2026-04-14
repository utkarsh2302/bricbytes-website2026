import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './ExpandableCard.css';

interface ExpandableCardProps {
  icon?: React.ReactNode;
  title: string;
  summary: string;
  content: string;
  index?: number;
}

export function ExpandableCard({ icon, title, summary, content, index = 0 }: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="expandable-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.button
        className="card-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ backgroundColor: 'rgba(0, 113, 227, 0.04)' }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="card-header-content">
          {icon && <div className="card-icon">{icon}</div>}
          <div className="card-text">
            <h3 className="card-title">{title}</h3>
            <p className="card-summary">{summary}</p>
          </div>
        </div>
        <motion.div
          className="card-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="card-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className="card-body">{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
