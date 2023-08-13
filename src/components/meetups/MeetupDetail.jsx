import Img from '../ui/Img';
import classes from './MeetupDetail.module.css'


function MeetupDetail({image,title,address,description}) {
  return (
    <section className={classes.detail}>
      <Img src={image} alt={title} />
      <h2>{title}</h2>
      <address>
        {address}
      </address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
