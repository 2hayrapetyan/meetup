import { useRouter } from "next/router";
import { container } from "./MainFooter.module.css";
import useTranslations from "@/cutomHooks/useTranslation";

function MainFooter({footerText}) {

  return (
     <footer className={container}><p>{footerText && footerText}</p></footer>
  );
}

export default MainFooter;
