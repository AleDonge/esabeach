'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.4 });

  return (
    <div className="fixed right-7 top-1/2 z-40 hidden h-28 w-px -translate-y-1/2 overflow-hidden rounded-full bg-white/20 lg:block">
      <motion.div className="h-full w-px origin-top bg-white" style={{ scaleY }} />
    </div>
  );
}
