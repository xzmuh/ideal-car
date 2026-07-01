import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { fadeInUp } from '../../lib/animations';

export const FadeIn = forwardRef(function FadeIn({ children, className = '', delay = 0, as = 'div', ...props }, ref) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay }}
      {...props}
    >
      {children}
    </MotionTag>
  );
});
