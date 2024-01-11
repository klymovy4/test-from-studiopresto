import classes from './ImageWrapper.module.css'

export default function ImageWrapper(item) {
  return (
    <div
      className={classes.imageWrapper}
      style={{ backgroundImage: `url(${item?.image})`, ...item.style}}
    ></div>
  );
}
