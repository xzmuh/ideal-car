import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { blurReveal } from '../../lib/animations';

export const RevealOnScroll = forwardRef(function RevealOnScroll(
  { children, className = '', as = 'div', amount = 0.22, once = true, ...props },
  ref
) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      ref={ref}
      variants={blurReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '-8% 0px' }}
      {...props}
    >
      {children}
    </MotionTag>
  );
});
