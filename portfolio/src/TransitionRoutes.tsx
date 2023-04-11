import { Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionWrapperProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: "-100%",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

// Ta bort children type om inget annat
const TransitionRoutes = ({ children }: TransitionWrapperProps) => {
  const location = useLocation();

  //  Replace with mode="wait" ExitbeforeEnter
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Routes location={location}>{children}</Routes>
      </motion.div>
    </AnimatePresence>
  );
};
export default TransitionRoutes;
