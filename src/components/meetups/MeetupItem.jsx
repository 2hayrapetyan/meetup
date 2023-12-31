import Link from "next/link";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
import useTranslations from "@/cutomHooks/useTranslation";
import Img from "../ui/Img";

function MeetupItem({ id, title, address, image }) {
  const locale = useRouter().locale;

  const  {buttonText}  = useTranslations(locale, "allMeetups");

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Img src={image} alt={title}  width={500} height={500}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <Link href={id} locale={locale}>
            <button>{buttonText && buttonText}</button>
          </Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
