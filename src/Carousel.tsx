import "flickity/css/flickity.css";
import styles from "./Carousel.module.css";
import { PropsWithChildren, useEffect, useRef } from "react";
import Flickity from "flickity";
import { classNames } from "./utils/classNames";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  options?: Flickity.Options;
};

export default function Carousel(props: CarouselProps) {
  const { options, className, ...rest } = props;
  const container = useRef<HTMLDivElement>(null);
  const flickity = useRef<Flickity>();

  useEffect(() => {
    if (container.current) {
      flickity.current = new Flickity(container.current, options);
    }
  }, []);

  return (
    <div
      className={classNames(styles.Carousel, className)}
      ref={container}
      {...rest}
    />
  );
}

export type CarouselCellProps = React.HTMLAttributes<HTMLDivElement>;

export function CarouselCell(props: CarouselCellProps) {
  const { className, ...rest } = props;
  return (
    <div className={classNames(styles.CarouselCell, className)} {...rest} />
  );
}
