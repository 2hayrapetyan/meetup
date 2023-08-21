import { useRouter } from "next/router";
import { container, text, primary, secondary } from "./MainFooter.module.css";

function MainFooter({ footerText }) {
  const pathname = useRouter().pathname;
  return (
    <>
      {footerText ? (
        <footer
          className={`${container} ${pathname === "/" ? primary : secondary}`}
        >
          <p className={text}>{footerText}</p>
        </footer>
      ) : null}
    </>
  );
}

export default MainFooter;
