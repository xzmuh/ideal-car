export const premiumEase = [0.22, 1, 0.36, 1];

export const smoothTransition = {
  duration: 0.58,
  ease: premiumEase
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: smoothTransition
  }
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    filter: 'blur(6px)'
  },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: premiumEase
    }
  }
};

export const blurReveal = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: premiumEase
    }
  }
};

export const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.68,
      ease: premiumEase
    }
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const textRevealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035
    }
  }
};

export const textRevealWord = {
  hidden: {
    opacity: 0,
    y: 22,
    filter: 'blur(8px)'
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.54,
      ease: premiumEase
    }
  }
};

export const cardHover = {
  y: -10,
  scale: 1.015,
  boxShadow: '0 24px 70px rgba(6, 6, 7, 0.14)',
  transition: {
    duration: 0.42,
    ease: premiumEase
  }
};

export const buttonHover = {
  y: -2,
  scale: 1.025,
  transition: {
    duration: 0.36,
    ease: premiumEase
  }
};
