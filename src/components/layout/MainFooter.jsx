import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { container } from './MainFooter.module.css';

function MainFooter() {
  const { locale } = useRouter();

  const footerTexts = useMemo(() => ({
    hy: `Ստեղծել է © Եղիշե Հայրապետյանը`,
    ru: `Создано © Егише Айрапетяном`,
    en: `Created by © Yeghishe Hayrapetyan`,
  }), []);

  return ( 
    <footer className={container}>
      {footerTexts[locale] || null}
    </footer>
  );
}

export default MainFooter;



