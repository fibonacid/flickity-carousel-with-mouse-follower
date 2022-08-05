import Carousel, { CarouselCell } from "./Carousel";
import styles from "./Gallery.module.css";
import MouseCursor from "./MouseCursor";

const IMAGES = [
  "https://source.unsplash.com/random/1200x1200/?nature,mountains",
  "https://source.unsplash.com/random/1200x1200/?nature,clouds",
  "https://source.unsplash.com/random/1200x1200/?nature,ocean",
  "https://source.unsplash.com/random/1200x1200/?nature,waves",
  "https://source.unsplash.com/random/1200x1200/?nature,cliffs",
  "https://source.unsplash.com/random/1200x1200/?nature,trees",
  "https://source.unsplash.com/random/1200x1200/?nature,hills",
  "https://source.unsplash.com/random/1200x1200/?nature,sea",
];

const options: Flickity.Options = {
  draggable: false,
};

export default function Gallery() {
  return (
    <>
      <MouseCursor />
      <Carousel className={styles.Gallery} options={options}>
        {IMAGES.map((image, index) => (
          <CarouselCell className={styles.GalleryItem} key={index}>
            <img
              className={styles.GalleryImage}
              src={image}
              width="1200"
              height="1200"
              draggable={false}
            />
          </CarouselCell>
        ))}
      </Carousel>
    </>
  );
}
