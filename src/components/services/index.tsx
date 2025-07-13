import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SelectedPage } from "@/shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Services({setSelectedPage}: Props) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const services = [
        "Çevresel Etki Değerlendirmesi (ÇED) Raporları ve Proje Tanıtım Dosyalarının hazırlanması",
        "Madencilik Faaliyetleri İle Bozulan Arazilerin Doğaya Yeniden Kazandırılması Yönetmeliği gereğince DOĞAYA YENİDEN KAZANDIRMA PLANI hazırlanması",
        "Kum Çakıl ve Benzeri Maddelerin Alınması, İşletilmesi ve Kontrolü Yönetmeliği gereğince ÇEVRE YÖNETİM PLANI hazırlanması",
        "Higg FEM danışmanlığı konularında çalışmaktadır."
    ];

    const managementServices = [
        "Çevre Yönetimi ve Planlama",
        "Çevre Yönetimi İzleme-Denetleme",
        "Çevresel Performans Değerlendirmesi",
        "Personel Eğitimleri",
        "Çevre Mevzuatına Uygunluk",
        "Yeşil Havaalanı (Green Airport) Uygulamaları"
    ];

    const servicesGrid = [
        "- Çevre İzin ve Lisansı Alınması",
        "- İşyeri Açma ve Çalışma Ruhsatı Alınması",
        "- ISO 14001 Çevre Kalite Yönetim Sistemi (ÇYS)",
        "- ISO 9001 Kalite Yönetim Sistemi",
        "- OHSAS 18001 İSG Yönetim Sistemi",
        "- ISO 17025 Laboratuar Akreditasyonu",
        "- ISO 22000 Gıda Güvenliği Yönetim Sistemi",
        "- Gıda ve Kozmetikte GMP Uygulamaları",
        "- Risk Analizi ve Değerlendirmesi",
        "- Belediyeler İçin Yardımcı Çevre Yönetim Planları Hazırlanması",
        "- Baca Gazı Arıtımı ve Toz Kontrol Sistemleri (Projelendirme, inşaat ve montaj)",
        "- Hava Kalitesi Modelleme Çalışması (EPA tarafından geliştirilen ISCST3, ISCLT3, AIRMOD Modelleri)",
        "- Çevresel Kirleticilerin Tespiti ve Analizi (hava kalitesi, su kalitesi ölçümleri)",
        "- Toprak Kirliliği Kontrolü ve Yönetimi",
        "- Akustik Rapor Hazırlanması",
        "- Çevre Teknolojileri Araştırma ve Geliştirme Çalışmaları"
    ];

    return (
        <section id="hizmetlerimiz">
        <div ref={ref} className="flex flex-col justify-center items-center p-6 text-gray-800">
            <motion.h2
                onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
                className="text-3xl font-bold text-center mt-16 mb-10"
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
            >
                HİZMETLERİMİZ
            </motion.h2>

            <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-6xl w-full">
                <div className="w-full md:flex-1">
                    <motion.h3
                        className="text-xl font-semibold text-left mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        ARTU ÇEVRE, çevre yönetimi danışmanlığı ve kirlilik önleme ile ilgili olarak;
                    </motion.h3>
                    <ul className="text-lg mb-8">
                        {services.map((service, index) => (
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
                                <div>{service}</div>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="w-full md:flex-1">
                    <motion.h3
                        className="text-xl font-semibold text-left mb-4 md:mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        Çevre Yönetimi Danışmanlığı kapsamında;
                    </motion.h3>
                    <ul className="text-lg">
                        {managementServices.map((service, index) => (
                            <motion.li
                                key={index}
                                className="flex items-start px-6 gap-4 mb-4 mt-5"
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                            >
                                <span className="bg-primary-1 text-white rounded-full w-8 h-8 flex justify-center items-center font-bold shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <div>{service}</div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div ref={gridRef} className="container mx-auto py-8 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesGrid.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-300 p-4 flex items-center h-full text-gray-800 text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            {service}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
        </section>

    );
}

export default Services;