import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import handshakeImage from "/src/assets/photos/handshake.jpg";


type HiggImageRowComponentProps = {
  text1?: string;
  text2?: string;
};

const HiggImageRowComponent: React.FC<HiggImageRowComponentProps> = ({
  text1,
  text2,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
 <section
  ref={ref}
  className="flex flex-col md:flex-row justify-center items-center gap-6 px-6 pt-20 pb-10 text-gray-800 max-w-4xl mx-auto"
>
  <motion.div
    className="text-center md:text-left text-xl font-semibold leading-relaxed"
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 1 }}
  >
    <p>
        {text1}
      <br />
      <br />
        {text2}
    </p>
  </motion.div>

  <motion.div
    className="flex justify-center bg-gray-100 rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    <img
      src={handshakeImage}
      alt="Takım çalışması görseli"
      className="rounded-md object-cover max-w-[400px] w-full h-auto"
    />
  </motion.div>
</section>


  );
};

export default HiggImageRowComponent;
