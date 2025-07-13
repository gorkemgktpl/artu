import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "@/content/content";

type Props = {
  title: string;
  description: string;
};

const HiggTextComponent: React.FC<Props> = ({ title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section>
      <div
        ref={ref}
        className="flex flex-col justify-center items-center pt-5 pb-10 text-gray-800"
      >
        <motion.h2
          className="text-3xl font-bold text-center mt-16 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg max-w-4xl px-8 mb-4 text-left space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {description.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default HiggTextComponent;
