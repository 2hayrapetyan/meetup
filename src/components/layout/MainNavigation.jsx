import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MenuItem from "@mui/material/MenuItem";

function MainNavigation({ navigation, title }) {
  const { locale, locales, push, pathname, query, asPath } = useRouter();
  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value;
    push({ pathname, query }, asPath, { locale: selectedLocale });
  };

  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {navigation && title ? (
        <header className={classes.header}>
          <div className={classes.logo}>{title}</div>
          {isSmallScreen ? (
            <BurgerMenu>
              <MenuItem>
                <Link href='/'>{navigation.navItem1}</Link>
              </MenuItem>
              <MenuItem>
                <Link href='/new-meetup'>{navigation.navItem2}</Link>
              </MenuItem>
              <MenuItem>
                <select
                  value={locale}
                  onChange={handleLocaleChange}
                  className={classes.select}
                >
                  <option value='' disabled>
                    {navigation.navItem3}
                  </option>
                  {locales.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </MenuItem>
            </BurgerMenu>
          ) : (
            <nav>
              <ul>
                <li>
                  <Link href='/'>{navigation.navItem1}</Link>
                </li>
                <li>
                  <Link href='/new-meetup'>{navigation.navItem2}</Link>
                </li>
                <li>
                  <select
                    value={locale}
                    onChange={handleLocaleChange}
                    className={classes.select}
                  >
                    <option value='' disabled>
                      {navigation.navItem3}
                    </option>
                    {locales.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </li>
              </ul>
            </nav>
          )}
        </header>
      ) : null}
    </>
  );
}

export default MainNavigation;
