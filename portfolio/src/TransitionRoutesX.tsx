import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface TransitionWrapperProps {
  children: React.ReactNode;
  tema?: boolean;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const TransitionRoutesX = ({ children, tema }: TransitionWrapperProps) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {React.Children.map(children, (child) => (
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {React.cloneElement(child as React.ReactElement<any>, { tema })}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default TransitionRoutesX;
