import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import { SelectedPage } from './shared/types';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Higg from './Higg';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        if (selectedPage !== SelectedPage.HiggIndex) {
          setSelectedPage(SelectedPage.Home);
        }
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedPage]);

  return <div className="app bg-secondary-500">

    <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
    />
    <Routes>
      <Route path="/" element={<HomePage
        setSelectedPage={setSelectedPage}
      />} />
      <Route path="/HiggIndex" element={<Higg 
      setSelectedPage={setSelectedPage} 
      />} />
    </Routes>
    <Footer />
  </div>
}

export default App;
