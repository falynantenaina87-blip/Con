import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const NeoButton = ({ children, onClick, className, variant = 'primary', disabled }: any) => {
  const baseStyles = "relative px-6 py-3 font-mono text-sm tracking-wider uppercase transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  // Asymmetric shape: rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl
  const shape = "rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl";
  
  const variants = {
    primary: "bg-transparent border border-neon-red text-neon-red shadow-[0_0_10px_rgba(255,49,49,0.3)] hover:shadow-[0_0_20px_rgba(255,49,49,0.6)] hover:bg-neon-red/10",
    secondary: "bg-slate-900 border border-slate-700 text-slate-300 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]",
    ghost: "text-slate-400 hover:text-neon-cyan",
  };

  return (
    <motion.button
      whileHover={{ scaleX: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, shape, variants[variant as keyof typeof variants], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export const NeoCard = ({ children, className, glow = false }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative backdrop-blur-md bg-slate-900/50 border border-white/5 p-6",
        "rounded-tl-none rounded-br-none rounded-tr-3xl rounded-bl-3xl",
        glow ? "shadow-[0_0_15px_rgba(34,211,238,0.1)] border-neon-cyan/20" : "",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NeoInput = ({ value, onChange, placeholder, type = "text", className, onKeyDown }: any) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    className={cn(
      "w-full bg-slate-950/80 border border-slate-700 text-slate-100 px-4 py-3 focus:outline-none focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all placeholder:text-slate-600 font-mono",
      "rounded-tl-none rounded-br-none rounded-tr-xl rounded-bl-xl",
      className
    )}
  />
);

export const SectionTitle = ({ children }: any) => (
  <h2 className="text-xl font-thin tracking-[0.2em] text-neon-cyan uppercase mb-6 border-b border-white/10 pb-2">
    {children}
  </h2>
);