import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { sectionReveal } from '../../lib/animations';

export const AnimatedSection = forwardRef(function AnimatedSection({ children, className = '', id, ...props }, ref) {
  return (
    <motion.section
      id={id}
      className={className}
      ref={ref}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18, margin: '-8% 0px' }}
      {...props}
    >
      {children}
    </motion.section>
  );
});
