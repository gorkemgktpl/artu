import { SelectedPage } from '@/shared/types';
import { useNavigate, useLocation } from 'react-router-dom';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function turkishToLower(text: string): string {
  const turkishChars: Record<string, string> = {
    İ: 'i',
    I: 'ı',
    Ş: 'ş',
    Ğ: 'ğ',
    Ü: 'ü',
    Ö: 'ö',
    Ç: 'ç',
  };

  return text
    .replace(/[İIŞĞÜÖÇ]/g, (letter) => turkishChars[letter] || letter)
    .toLowerCase();
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = turkishToLower(page).replace(/ /g, '') as SelectedPage;
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedPage(lowerCasePage);

    if (lowerCasePage === SelectedPage.HiggIndex) {
      navigate('/HiggIndex');
      return;
    }

    if (!isHomePage) {
      navigate('/', { state: { selectedPage: lowerCasePage } });
      setTimeout(() => {
        const section = document.getElementById(lowerCasePage);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      setTimeout(() => {
        const section = document.getElementById(lowerCasePage);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const shouldUseAnchorLink =
    isHomePage && lowerCasePage !== SelectedPage.HiggIndex;

    return shouldUseAnchorLink ? (
      <a
        className={`${selectedPage === lowerCasePage ? 'text-primary-3' : ''}
            transition duration-500 hover:text-primary-2 text-left cursor-pointer
          `}
        href={`#${lowerCasePage}`}
        onClick={handleClick}
      >
        {page}
      </a>
    ) : (
      <button
        className={`${selectedPage === lowerCasePage ? 'text-primary-3' : ''} text-left transition duration-500 hover:text-primary-2 `}
        onClick={handleClick}
      >
        {page}
      </button>
    );
  };

export default Link;