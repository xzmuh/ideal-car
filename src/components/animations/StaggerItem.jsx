import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { fadeInUp } from '../../lib/animations';

export const StaggerItem = forwardRef(function StaggerItem({ children, className = '', as = 'div', ...props }, ref) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag className={className} ref={ref} variants={fadeInUp} {...props}>
      {children}
    </MotionTag>
  );
});
