import { RevealText } from './RevealText';

export function AnimatedTitle({ text, className = '', as = 'h2' }) {
  return <RevealText as={as} className={className} text={text} />;
}
