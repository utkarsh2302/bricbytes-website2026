import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './PositionEditor.css';

interface ElementPos {
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  element: string;
}

export function PositionEditor() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [positions, setPositions] = useState<Record<string, ElementPos>>({
    navbar: { name: 'Navbar (Fixed)', x: 0, y: 0, width: 100, height: 6, element: '.navbar' },
    textWrapper: { name: 'Text + Line + Tagline', x: 20, y: 18, width: 60, height: 35, element: '.hero-text-wrapper' },
    robot: { name: 'Robot', x: 60, y: 12, width: 40, height: 70, element: '.hero-robot' },
    cards: { name: 'Property Cards', x: 10, y: 82, width: 80, height: 12, element: '.hero-property-cards' },
    ctas: { name: 'CTAs', x: 20, y: 48, width: 40, height: 6, element: '.hero-ctas' },
  });

  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, elementKey: string) => {
    e.preventDefault();
    setDraggedElement(elementKey);

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const pos = positions[elementKey];
    const elementX = (pos.x / 100) * rect.width;
    const elementY = (pos.y / 100) * rect.height;

    setDragOffset({
      x: e.clientX - rect.left - elementX,
      y: e.clientY - rect.top - elementY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedElement || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100;
    const y = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100;

    setPositions(prev => ({
      ...prev,
      [draggedElement]: {
        ...prev[draggedElement],
        x: Math.max(0, Math.min(100, x)),
        y: Math.max(0, Math.min(100, y)),
      }
    }));
  };

  const handleMouseUp = () => {
    setDraggedElement(null);
  };

  const generateCSS = () => {
    let css = `/* Positions for ${isMobile ? 'mobile (640px)' : 'desktop'} */\n`;
    css += `@media (max-width: ${isMobile ? '640px' : '1440px'}) {\n`;

    Object.entries(positions).forEach(([, pos]) => {
      css += `  ${pos.element} {\n`;

      if (pos.element === '.navbar') {
        css += `    position: fixed;\n`;
        css += `    top: ${pos.y}px;\n`;
        css += `    height: ${pos.height}rem;\n`;
      } else if (pos.element === '.hero-text-wrapper') {
        css += `    position: relative;\n`;
        css += `    top: ${pos.y}px;\n`;
        css += `    left: ${pos.x}%;\n`;
      } else if (pos.element === '.hero-robot') {
        css += `    right: ${(pos.x - 100).toFixed(1)}vw;\n`;
        css += `    top: ${pos.y}px;\n`;
      } else if (pos.element === '.hero-property-cards') {
        css += `    bottom: ${(100 - pos.y).toFixed(1)}%;\n`;
        css += `    left: ${pos.x}%;\n`;
      } else if (pos.element === '.hero-ctas') {
        css += `    margin-top: ${pos.y}px;\n`;
      }

      css += `  }\n\n`;
    });

    css += `}\n`;
    return css;
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="position-editor-toggle"
        title="Position Editor"
      >
        📍
      </button>

      {/* Editor Panel */}
      {isOpen && (
        <motion.div
          className="position-editor-panel"
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 400 }}
        >
          <div className="editor-header">
            <h3>Position Editor</h3>
            <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
          </div>

          {/* Mobile/Desktop Toggle */}
          <div className="editor-toggle">
            <button
              className={!isMobile ? 'active' : ''}
              onClick={() => setIsMobile(false)}
            >
              Desktop
            </button>
            <button
              className={isMobile ? 'active' : ''}
              onClick={() => setIsMobile(true)}
            >
              Mobile
            </button>
          </div>

          {/* Preview Canvas */}
          <div
            className={`editor-canvas ${isMobile ? 'mobile' : 'desktop'}`}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {Object.entries(positions).map(([key, pos]) => (
              <motion.div
                key={key}
                className={`editor-element ${draggedElement === key ? 'dragging' : ''}`}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  width: `${pos.width}%`,
                  height: `${pos.height}%`,
                }}
                onMouseDown={(e) => handleMouseDown(e, key)}
              >
                <span>{pos.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <div className="editor-values">
            {Object.entries(positions).map(([key, pos]) => (
              <div key={key} className="value-row">
                <label>{pos.name}</label>
                <div className="inputs">
                  <input
                    type="number"
                    value={pos.x.toFixed(1)}
                    onChange={(e) =>
                      setPositions(prev => ({
                        ...prev,
                        [key]: { ...prev[key], x: parseFloat(e.target.value) }
                      }))
                    }
                    placeholder="X %"
                  />
                  <input
                    type="number"
                    value={pos.y.toFixed(0)}
                    onChange={(e) =>
                      setPositions(prev => ({
                        ...prev,
                        [key]: { ...prev[key], y: parseFloat(e.target.value) }
                      }))
                    }
                    placeholder="Y px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CSS Output */}
          <div className="editor-output">
            <textarea
              value={generateCSS()}
              readOnly
              onClick={(e) => (e.target as HTMLTextAreaElement).select()}
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(generateCSS());
                alert('CSS copied to clipboard!');
              }}
              className="copy-btn"
            >
              Copy CSS
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
