import { SelectedPage } from '@/shared/types'
import React from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from "framer-motion"

type Props = {
    id? : string;
    title : string;
    image : string;
    setSelectedPage: (value: SelectedPage) => void;
}

function Home({ title, id, image,  setSelectedPage }: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return (
        <section 
            id = {id}
            className="min-h-screen flex flex-col items-center justify-center relative px-4"
        >
            <motion.div 
                className="relative w-full max-w-[1000px]"
                whileHover={{ scale: isAboveMediumScreens ? 1.02 : 1 }}
            >
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ duration: 2, ease: "easeOut" }} 
                    className={`
                        w-full 
                        rounded-2xl 
                        overflow-hidden 
                        relative
                        ${isAboveMediumScreens ? 'h-[500px]' : 
                          isAboveSmallScreens ? 'h-[500px]' : 'h-[500px] w-[300px]'}
                    `}
                >
                    <img 
                        className="w-full h-full object-cover opacity-85 elevation-10 shadow-2xl" 
                        src={image}
                        alt="forest" 
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut" }} 
                    className="absolute inset-0 flex items-center justify-center z-30"
                >
                    <h1 className={`
                        font-bold 
                        font-montserrat 
                        text-white-200
                        text-center
                        ${isAboveMediumScreens ? 'text-5xl' : 
                          isAboveSmallScreens ? 'text-4xl' : 'text-5xl'}
                    `}>
                        {title}
                    </h1>
                </motion.div>
            </motion.div>

            {/* Ok En Altta Kalsın */}
            <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} 
                className="absolute bottom-5"
            >
                <img 
                    src="/src/assets/icons/down-arrow.png" 
                    alt="Down Arrow" 
                    className={`
                        ${isAboveMediumScreens ? 'w-12 h-12' : 
                          isAboveSmallScreens ? 'w-10 h-10' : 'w-8 h-8'}
                    `}
                />
            </motion.div>
        </section>
    );
}

export default Home;