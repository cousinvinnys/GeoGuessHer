import { motion } from "framer-motion";
import { useState } from "react";

type WelcomeScreenProps = {
  onStart: () => void;
};

export default function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [isVisible, setVisible] = useState<boolean>(true);
  const toggleStart = () => {
    setVisible(false);
    onStart();
  };

  return (
    isVisible && (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-900 to-slate-900 text-white overflow-hidden relative">
          <div className="flex flex-col items-center">
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold tracking-wide"
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.3,
              }}
            >
              {import.meta.env.VITE_APP_TITLE_1}
            </motion.h1>
            <motion.h1
              className="text-6xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent"
              initial={{ x: "100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                delay: 0.6,
              }}
            >
              {import.meta.env.VITE_APP_TITLE_2}
            </motion.h1>
          </div>
          <motion.p
            className="mt-8 text-lg md:text-2xl text-center max-w-2xl leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {import.meta.env.VITE_APP_DESCRIPTION}
          </motion.p>

          <motion.p
            className="mt-8 text-lg md:text-2xl text-center max-w-2xl leading-relaxed text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {import.meta.env.VITE_APP_DESCRIPTION_2}
          </motion.p>

          <motion.button
            onClick={toggleStart}
            className="absolute bottom-12 px-10 py-4 bg-emerald-400 hover:bg-emerald-500 text-black font-bold text-xl rounded-2xl shadow-lg transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            Let’s Begin!
          </motion.button>

          <motion.div
            className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <motion.div
            className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          />
        </div>
      </>
    )
  );
}
