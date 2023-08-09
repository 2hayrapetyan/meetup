import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import MainFooter from './MainFooter';
import useTranslations from '@/cutomHooks/useTranslation';
import { useRouter } from 'next/router';

function Layout(props) {
  const locale = useRouter().locale
  const translations = useTranslations(locale,'layout')
  return (
  <>
  {translations ? (
      <div>
      <MainNavigation navigation={translations.navigation} title={translations.title}/>
      <main className={classes.main}>{props.children}</main>
      <MainFooter footerText={translations.copyright}/>
    </div>
  ) : null}
  </>
  );
}

export default Layout;
