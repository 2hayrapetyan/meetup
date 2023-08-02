import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

function MainNavigation() {
  const { locale, locales, push, pathname, query, asPath } = useRouter();
  const handleLocaleChange = (event) => {
    const selectedLocale = event.target.value;
    push({ pathname, query }, asPath, { locale: selectedLocale });
  };

  const headerTexts = useMemo(
    () => ({
      hy: {
        title: "Ռեակտ և Նեքստ.ջս",
        nav1: "Բոլոր վայրերը",
        nav2: "Ավելացնել",
        lang: "Լեզուն",
      },
      ru: {
        title: "Реакт и Некст",
        nav1: "Все встречи",
        nav2: "Добавить встречу",
        lang: "язык",
      },
      en: {
        title: "React & Next.js",
        nav1: "All meetups",
        nav2: "Add meetup",
        lang: "lang.",
      },
    }),
    []
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>{headerTexts[locale]?.title || "Fallback Title"}</div>
      <nav>
        <ul>
          <li>
            <Link href="/">{headerTexts[locale]?.nav1 || "Fallback Nav 1"}</Link>
          </li>
          <li>
            <Link href="/new-meetup">{headerTexts[locale]?.nav2 || "Fallback Nav 2"}</Link>
          </li>
          <li>
            <select
              value={locale}
              onChange={handleLocaleChange}
              className={classes.select}
            >
              <option value="" disabled>
                {headerTexts[locale]?.lang || "Fallback Lang"}
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
    </header>
  );
}

export default MainNavigation;
