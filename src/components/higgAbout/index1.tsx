import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { content } from "@/content/content";

type Props = {
  title1: string;
  description1: string[];
  title2?: string;
  description2?: string[];
  title3?: string;
  description3?: string[];
};

const HiggRowComponent: React.FC<Props> = ({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section>
      <div
        ref={ref}
        className="flex flex-col justify-center items-center p-10 pt-20 text-gray-800"
      >
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-6xl">
          {/* COLUMN 1 (REQUIRED) */}
          <div className="w-full md:flex-1">
            <motion.h3
              className="text-xl font-semibold text-left mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {title1}
            </motion.h3>
            <ul className="text-lg mb-4">
              {description1.map((service, index) => (
                <motion.li
                  key={index}
                  className="flex items-start px-6 gap-4 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <span className="bg-primary-1 text-white rounded-full w-2 h-2 flex justify-center items-center font-bold shrink-0 self-center" />
                  <div>{service}</div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 (OPTIONAL) */}
          {title2 && description2 && description2.length > 0 && (
            <div className="w-full md:flex-1">
              <motion.h3
                className="text-xl font-semibold text-left mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {title2}
              </motion.h3>
              <ul className="text-lg">
                {description2.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start px-6 gap-4 mb-4 mt-5"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.2,
                    }}
                  >
                    <span className="bg-primary-1 text-white rounded-full w-2 h-2 flex justify-center items-center font-bold shrink-0 self-center" />
                    <div>{service}</div>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* COLUMN 3 (OPTIONAL, BELOW) */}
      {title3 && description3 && description3.length > 0 && (
        <div className="flex flex-col justify-center items-center pt-20">
          <motion.h3
            className="text-xl font-semibold text-left mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {title3}
          </motion.h3>
          <ul className="text-lg max-w-3xl">
            {description3.map((service, index) => (
              <motion.li
                key={index}
                className="flex items-start px-6 gap-4 mb-4 mt-5"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                <span className="bg-primary-1 text-white rounded-full w-2 h-2 flex justify-center items-center font-bold shrink-0 self-center" />
                <div>{service}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default HiggRowComponent;
