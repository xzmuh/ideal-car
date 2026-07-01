import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { staggerContainer } from '../../lib/animations';

export const StaggerContainer = forwardRef(function StaggerContainer(
  { children, className = '', as = 'div', amount = 0.2, once = true, ...props },
  ref
) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-8% 0px' }}
      {...props}
    >
      {children}
    </MotionTag>
  );
});
