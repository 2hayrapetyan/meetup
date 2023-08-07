import { useRouter } from "next/router";
import { container } from "./MainFooter.module.css";
import useTranslations from "@/cutomHooks/useTranslation";

function MainFooter() {
  const { locale } = useRouter();
  const translations = useTranslations(locale, ["copyright"]);
  const footerText = translations["copyright"];

  return (
    <footer className={container}>{footerText && <p>{footerText}</p>}</footer>
  );
}

export default MainFooter;
