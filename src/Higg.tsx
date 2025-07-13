import React, { useEffect, useState } from 'react'
import { SelectedPage } from './shared/types';
import Home from './components/home';
import HiggTextComponent from './components/higgAbout';
import { content, femPurpose, femFields , beforeStarting} from "@/content/content";
import HiggRowComponent from './components/higgAbout/index1';
import HiggImageRowComponent from './components/higgAbout/index2';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Higg = ({ setSelectedPage }: Props) => {

    useEffect(() => {
        setSelectedPage(SelectedPage.HiggIndex);
        document.title = "Higg Index Nedir?";
    }, [setSelectedPage]);

    return (
        <div>
            <Home 
            id='HiggIndex'
            image='/src/assets/photos/forest3.jpg'
            title='Higg Index Nedir?' setSelectedPage={setSelectedPage}/>
            <HiggTextComponent title={content.whatIsHiggTitle} description={content.whatIsHiggDescription}/>
            <HiggTextComponent title={content.whatIsHiggFEMTitle} description= {content.whatIsHiggFEMDescription}/>
            <HiggRowComponent 
            title1={content.higgFEMTitle1} 
            description1={femPurpose} 
            title2={content.higgFEMTitle2} 
            description2={femFields}
            title3={content.higgFEMTitle3}
            description3={beforeStarting}
            />
            <HiggImageRowComponent 
              text1={content.higgRowDescription1}
              text2={content.higgRowDescription2}
            />
            <HiggRowComponent
              title1={content.higgRowDescription1}
              description1={femPurpose}
            />

        </div>
    )
}

export default Higg