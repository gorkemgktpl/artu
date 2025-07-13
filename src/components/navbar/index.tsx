import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from './Link'
import Home from '@/components/home'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import artuLogo from "/src/assets/icons/artulogo-2.png";


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexbetween = 'flex items-center justify-between';
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');
    const navbarBackground = isTopOfPage ? '' : 'bg-white-200 shadow-md bg-opacity-90';
    
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    // HIDE NAVBAR ON SCROLL DOWN
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = prevScrollPos < currentScrollPos;
            const isScrollingUp = prevScrollPos > currentScrollPos;
            if (isScrollingDown && currentScrollPos > 70) {
                setVisible(false);
            } else if (isScrollingUp) {
                setVisible(true);
            }
            
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return <nav>
        <div className={`${navbarBackground} ${flexbetween} fixed top-0 z-30 w-full transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`${flexbetween} mx-auto w-5/6 z-30 py-2`}>
                <div className={`${flexbetween} w-full gap-10`}>
                    <img className='w-14 h-auto' src={artuLogo} alt="Logo" />
                    {isAboveMediumScreen ?
                    <div className={`flex items-center justify-end w-full`}>
                        <div className={`flex items-center gap-6 text-base`}>
                        <Link page='Ana Sayfa' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page='Hakkımızda' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page='Higg Index' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>  
                        <Link page='Hizmetlerimiz' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                        <Link page='İletişim' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        </div>
                    </div> : (
                        <button 
                        className="rounded-full bg-primary-2 p-2 shadow-md transition-all duration-300 hover:bg-primary-1 active:scale-95"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                      >
                        <Bars3Icon className="h-7 w-7 text-white transition-all duration-300" />
                      </button>
                      
                    )}
                </div>
            </div>
        </div>
        {/* MOBILE MENU */}
        {
            <div className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-1 drop-shadow-xl transition-transform duration-300 ease-in-out 
                ${!isAboveMediumScreen && isMenuToggled ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className='flex justify-end p-12'>
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className='h-6 w-6 text-white' />
                    </button>
                </div>
                {/* MOBILE MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-4 text-2xl">
                <Link page='Ana Sayfa' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page='Hakkımızda' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page='Higg Index' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                <Link page='Hizmetlerimiz' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/> 
                <Link page='İletişim' selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        }
    </nav>;
}

export default Navbar