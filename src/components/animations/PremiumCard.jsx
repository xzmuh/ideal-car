import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { cardHover, fadeInUp } from '../../lib/animations';

export const PremiumCard = forwardRef(function PremiumCard(
  { children, className = '', as = 'article', reveal = true, ...props },
  ref
) {
  const MotionTag = motion[as] || motion.article;

  return (
    <MotionTag
      className={className}
      ref={ref}
      variants={reveal ? fadeInUp : undefined}
      whileHover={cardHover}
      {...props}
    >
      {children}
    </MotionTag>
  );
});
