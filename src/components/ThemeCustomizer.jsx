import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import '../styles/theme.css';

const PaletteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const PRESET_COLORS = [
  { label: 'Violet', value: '#6c63ff' },
  { label: 'Indigo', value: '#4f46e5' },
  { label: 'Blue', value: '#2563eb' },
  { label: 'Cyan', value: '#06b6d4' },
  { label: 'Emerald', value: '#10b981' },
  { label: 'Green', value: '#22c55e' },
  { label: 'Amber', value: '#f59e0b' },
  { label: 'Orange', value: '#f97316' },
  { label: 'Rose', value: '#f43f5e' },
  { label: 'Pink', value: '#ec4899' },
  { label: 'Purple', value: '#a855f7' },
  { label: 'Slate', value: '#64748b' },
];

export default function ThemeCustomizer({ primaryColor, setPrimaryColor }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-customizer">
      <motion.button className="theme-fab" onClick={() => setOpen(o => !o)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} title="Customize colors">
        {open ? <X size={20} /> : <PaletteIcon />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div className="theme-panel"
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <p className="theme-panel-title">Accent Color</p>
            <div className="color-presets">
              {PRESET_COLORS.map(c => (
                <button key={c.value} className={`color-swatch${primaryColor === c.value ? ' active' : ''}`}
                  style={{ background: c.value }} onClick={() => setPrimaryColor(c.value)} title={c.label} />
              ))}
            </div>
            <div className="color-custom">
              <label className="custom-color-label">Custom</label>
              <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="custom-color-input" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}