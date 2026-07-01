import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { buttonHover } from '../../lib/animations';

export const PremiumButton = forwardRef(function PremiumButton({ children, className = '', href, ...props }, ref) {
  return (
    <motion.a
      className={className}
      href={href}
      ref={ref}
      whileHover={buttonHover}
      whileTap={{ scale: 0.985 }}
      {...props}
    >
      {children}
    </motion.a>
  );
});
