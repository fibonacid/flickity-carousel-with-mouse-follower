import { useRef } from "react";
import Carousel, { CarouselCell } from "./Carousel";
import Cursor, { CursorAPI } from "./Cursor";
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

export default function Gallery() {
  const cursorRef = useRef<CursorAPI>(null);

  const handlePointerEvent = (event: Event) => {
    if (event instanceof PointerEvent) {
      cursorRef.current?.moveTo(event.clientX, event.clientY);
    }
  };

  const options: Flickity.Options = {
    draggable: true,
    on: {
      dragMove(event) {
        if (event instanceof PointerEvent) {
          cursorRef.current?.moveTo(event.clientX, event.clientY);
        }
      },
    },
  };

  return (
    <>
      <Cursor ref={cursorRef} />
      <Carousel
        className={styles.Gallery}
        options={options}
        onMouseMove={(event) => {
          cursorRef.current?.moveTo(event.clientX, event.clientY);
        }}
      >
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
