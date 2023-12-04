import { motion } from "framer-motion";

export default function Container({ className, children }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`wraper ${className}`}>
      {children}
    </motion.div>
  );
}
