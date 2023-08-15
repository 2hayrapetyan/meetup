/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { img, hero, imgContainer, zoomed,fadeIn } from "./MainPage.module.css";
import useTranslations from "@/cutomHooks/useTranslation";
import { useEffect, useState } from "react";

function MainPage() {
  const locale = useRouter().locale;
  const { title, header } = useTranslations(locale, "home");

  const [isZoomed, setIsZoomed] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsZoomed(false);
    }, 2600);
  }, []);

  return (
    <>
      <div className={imgContainer}>
        <img
          className={`${img} ${isZoomed ? zoomed : ""}`}
          src='/images/wall-image.jpg'
          alt='wallpaper'
        />
      </div>
      {!isZoomed && title && header ? (
        <div className={`${hero} ${fadeIn}`}>
          <h2>{title}</h2>
          <p>{header}</p>
        </div>
      ) : null}
    </>
  );
}

export default MainPage;
