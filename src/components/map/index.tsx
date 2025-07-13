import React from 'react'

type Props = {}

function GoogleMapEmbed({}: Props) {
  return (
    <div className="w-full h-[400px] md:h-[400px] mt-10">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6033.400130151214!2d29.350691000000005!3d40.878456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad9863cdb2ed3%3A0xc752b59b0939c025!2zQXJ0dSDDh2V2cmUgRGFuxLHFn21hbmzEsWs!5e0!3m2!1str!2str!4v1741448785308!5m2!1str!2str"
        width="100%" 
        height="100%" 
        style={{ border: 10 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Artu Çevre Danışmanlık"
      ></iframe>
    </div>
  )
}

export default GoogleMapEmbed