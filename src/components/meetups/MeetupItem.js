import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import { useMemo } from "react";

function MeetupItem({ id, title, address, image }) {
  const locale = useRouter().locale;

  const buttonText = useMemo(
    () => ({
      hy: `Ցույց տալ ավելին`,
      ru: `Показать детали`,
      en: `Show Details`,
    }),
    []
  );

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={id} locale={locale}>
            <button>{buttonText[locale]}</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
