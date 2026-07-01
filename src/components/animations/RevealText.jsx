import { motion } from 'motion/react';
import { textRevealContainer, textRevealWord } from '../../lib/animations';

export function RevealText({ text, className = '', as = 'h2', wordClassName = '' }) {
  const MotionTag = motion[as] || motion.h2;
  const words = text.split(' ');

  return (
    <MotionTag
      className={className}
      variants={textRevealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.28 }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className={`inline-block ${wordClassName}`}
          key={`${word}-${index}`}
          variants={textRevealWord}
        >
          {word}
          {index < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </MotionTag>
  );
}
