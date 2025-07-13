import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import React from 'react'
import contactImage from "/src/assets/photos/contact.jpg" ;

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

function Contact({setSelectedPage}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
    
  return (
    <section id="iletişim">
    <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        className={`
        overflow-hidden 
        relative
        mt-10
        ${isAboveMediumScreens ? 'h-[500px]' : 
          isAboveSmallScreens ? 'h-[500px]' : 'h-[550px] min-h-[500px]'}
        
    `}>
        
        <div className='w-full h-full bg-black bg-opacity-70'>
            <img 
              src={contactImage}
              alt="forest" 
              className="w-full h-full object-cover scale-100 opacity-80"
            />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 md:p-8 rounded-lg text-white-200 w-full md:w-[90%] lg:w-[85%] max-w-6xl">
                <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-10">İLETİŞİM</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 lg:gap-20">
                    <div className="px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3">Adres:</h3>
                        <p className="text-sm md:text-base">
                            Artu Çevre Danışmanlık<br />
                            Müh.İnş.Taah.San. ve Tic.Ltd.Şti.<br />
                            İstanbul Deri OSB Mah. Kazlıçeşme Cad.<br />
                            İstanbul Deri OSB Çarşı Kompleksi No:5 İç Kapı No:1021<br />
                            Tuzla İSTANBUL / Türkiye
                        </p>
                        
                        <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">E-mail:</h3>
                        <p className="text-sm md:text-base">
                          <a 
                            href="mailto:bilgi@artucevre.com" 
                            className=" hover:underline"
                          >
                            bilgi@artucevre.com
                          </a>
                        </p>
                    </div>
                    
                    <div className="px-4 md:px-8">
                        <h3 className="text-xl md:text-2xl font-semibold mb-3">Telefon:</h3>
                        <p className="text-sm md:text-base">
                          <a 
                            href="tel:+902163942178" 
                            className=" hover:underline"
                          >
                            +90 216 394 21 78
                          </a>
                        </p>
                        
                        <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Faks:</h3>
                        <p className="text-sm md:text-base">+90 216 394 22 39</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    </section>
  )
}

export default Contact
