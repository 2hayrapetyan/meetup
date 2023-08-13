import { container,text } from "./MainFooter.module.css";

function MainFooter({footerText}) {

  return (
     <footer className={container}><p className={text}>{footerText}</p></footer>
  );
}

export default MainFooter;
