import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import certificatePhoto from "/src/assets/photos/forest2.jpg" 

type Props = {}

function Certificate({}: Props) {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
  return (
    <div
    className={`
        overflow-hidden 
        relative
        mt-16
        ${isAboveMediumScreens ? 'h-[500px]' : 
          isAboveSmallScreens ? 'h-[500px]' : 'h-[400px] min-h-[500px]'}
    `}>
        <div className='w-full h-full'>
            <img 
              src={certificatePhoto}
              alt="forest" 
              className="w-full h-full object-cover scale-150 opacity-90"
            />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <div className="max-w-3xl">
            <h1 className={`
              font-semibold text-white mb-6 text-center 
              ${isAboveMediumScreens ? 'text-2xl' : 
                isAboveSmallScreens ? 'text-xl' : 'text-lg'}
            `}>
              Firmamız, T.C. Çevre ve Şehircilik Bakanlığı tarafından 30.07.2019 tarih ve 30847 sayılı Resmi Gazete' de yayımlanarak yürürlüğe giren Çevre Yönetimi Hizmetleri Hakkında Yönetmelik gereğince Çevre Danışmanlık Yeterlik Belgesi'ne sahiptir.
            </h1>
            <div className="flex justify-center">
              <button 
              onClick={() => window.open("/public/Artu_Cevre_Yeterlilik.pdf", "_blank")}
              className={`
                hover:bg-white text-white hover:text-black border border-white
                transition duration-300 rounded-full text-center
                ${isAboveMediumScreens ? 'py-3 px-6 text-base' : 
                  isAboveSmallScreens ? 'py-2 px-5 text-sm' : 'py-2 px-4 text-xs'}
              `}>
                Danışmanlık Yeterlilik Belgemizi görmek için tıklayın
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Certificate