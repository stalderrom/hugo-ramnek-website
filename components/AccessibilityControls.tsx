'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    // Load preferences from localStorage
    const savedFontSize = localStorage.getItem('fontSize') as 'small' | 'normal' | 'large' | null;
    const savedContrast = localStorage.getItem('highContrast') === 'true';

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrast) setHighContrast(savedContrast);
  }, []);

  useEffect(() => {
    // Apply font size to html element for rem scaling
    document.documentElement.classList.remove('font-small', 'font-normal', 'font-large');
    document.documentElement.classList.add(`font-${fontSize}`);
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    localStorage.setItem('highContrast', String(highContrast));
  }, [highContrast]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white border-2 border-accent/20 rounded-lg shadow-2xl p-6 w-80 mb-2"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900">Leseeinstellungen</h3>

            {/* Font Size Control */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-gray-700">
                Schriftgröße
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setFontSize('small')}
                  className={`px-3 py-2 rounded font-semibold transition-all ${
                    fontSize === 'small'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Klein
                </button>
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-3 py-2 rounded font-semibold transition-all ${
                    fontSize === 'normal'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Normal
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-3 py-2 rounded font-semibold transition-all ${
                    fontSize === 'large'
                      ? 'bg-accent text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Groß
                </button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="mb-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-semibold text-gray-700">Hoher Kontrast</span>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${
                    highContrast ? 'bg-accent' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full transition-transform ${
                      highContrast ? 'translate-x-7' : 'translate-x-0'
                    }`}
                  />
                </button>
              </label>
            </div>

            <p className="text-xs text-gray-500 mt-4 italic">
              Ihre Einstellungen werden automatisch gespeichert
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-accent text-white rounded-full shadow-xl flex items-center justify-center hover:bg-accent-dark transition-colors"
        aria-label="Leseeinstellungen öffnen"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </motion.button>
    </div>
  );
}
