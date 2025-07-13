import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function About({setSelectedPage }: Props) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="hakkımızda">
                    <div ref={ref} className="min-h-screen flex flex-col justify-center items-center text-gray-800">
            <motion.h2
                onViewportEnter={() => setSelectedPage(SelectedPage.About)}
                className="text-3xl font-bold text-center mt-16 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                HAKKIMIZDA
            </motion.h2>
            <motion.p
                className="text-lg text-center max-w-2xl px-8 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                ARTU ÇEVRE, çevre yönetimi danışmanlığı ve mühendislik çalışmalarında 2006 yılından itibaren deneyimli personeli ve geniş mühendis kadrosu ile çevre sorunlarına çözümsel yaklaşımlar sunan, kirlilik önleme çalışmaları yürüten hizmetler sunmaktadır.
            </motion.p>
            <motion.p
                className="text-lg text-center max-w-2xl px-8 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                ARTU ÇEVRE, personeli, danışmanları ve partnerleri ile endüstriyel tesislere ve özel sektörden belediyeler, kamu kurum ve kuruluşlara kadar hizmet verecek kapasitede bir danışmanlık şirketidir.
            </motion.p>
            <ul className="max-w-2xl text-lg pb-30">
                {["Sektörlere özgü çevre problemlerinin tanımlanması,",
                    "Çözümler bulunması ve uygulanması,",
                    "Değişen ve yenilenen mevzuatların izlenmesi,",
                    "Değişiklikler konusunda sanayicinin bilgilendirilmesi,",
                    "Yasal sorumlulukların yerine getirilmesi,",
                    "Yetkili merciler için tesislerin hazırlanması,",
                    "Higg FEM danışmanlığı konularında etkin çalışmalar yapılmaktadır."].map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-start px-6 gap-4 mb-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        >
                            <span className="bg-primary-1 text-white rounded-full w-8 h-8 flex justify-center items-center font-bold shrink-0 mt-0.5">
                                {index + 1}
                            </span>
                            <div>{item}</div>
                        </motion.li>
                    ))}
            </ul>
        </div>
        </section>

    );
}

export default About;