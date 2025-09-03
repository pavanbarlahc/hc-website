"use client";

import { createContext, useContext } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

// Context to track staggered group
const FadeInStaggerContext = createContext(false);

// Adjust viewport to trigger animations when element is partially visible
const viewport = { once: true, amount: 0.4 };

export function FadeIn(
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  // Enhanced motion variants
  const springTransition: Transition = {
    type: "spring",
    stiffness: 80,
    damping: 20,
    duration: 0.6,
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: springTransition,
    },
  };

  return (
    <motion.div
      variants={variants}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}

export function FadeInStagger({
  faster = false,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{
          staggerChildren: faster ? 0.1 : 0.2,
        }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}
