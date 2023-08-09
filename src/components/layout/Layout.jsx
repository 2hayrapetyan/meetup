import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import MainFooter from './MainFooter';
import useTranslations from '@/cutomHooks/useTranslation';
import { useRouter } from 'next/router';

function Layout(props) {
  const locale = useRouter().locale
  const translations = useTranslations(locale,'layout')
  return (
    <div>
      <MainNavigation navigation={translations && translations.navigation} title={translations && translations.title}/>
      <main className={classes.main}>{props.children}</main>
      <MainFooter footerText={translations && translations.copyright}/>
    </div>
  );
}

export default Layout;
