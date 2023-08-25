import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import MainFooter from './MainFooter';
import useTranslations from '@/cutomHooks/useTranslation';
import { useRouter } from 'next/router';

function Layout(props) {
  const {locale,pathname} = useRouter()
  const translations = useTranslations(locale,'layout')
  return (
  <>
  {translations ? (
      <div className={classes.container} style={{ background: pathname === '/' ? 'white' : '#DCF1E1FF' }}>
      <MainNavigation navigation={translations.navigation}/>
      <main className={classes.main}>{props.children}</main>
      <MainFooter footerText={translations.copyright}/>
    </div>
  ) : null}
  </>
  );
}

export default Layout;
