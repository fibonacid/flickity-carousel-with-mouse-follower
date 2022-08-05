import "flickity/css/flickity.css";
import styles from "./Carousel.module.css";
import { PropsWithChildren, useEffect, useRef } from "react";
import Flickity from "flickity";
import { classNames } from "./utils/classNames";

export type CarouselProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  options?: Flickity.Options;
};

export default function Carousel(props: CarouselProps) {
  const { children, className, options } = props;
  const container = useRef<HTMLDivElement>(null);
  const flickity = useRef<Flickity>();

  useEffect(() => {
    if (container.current) {
      flickity.current = new Flickity(container.current, options);
    }
  }, []);

  return (
    <div className={classNames(styles.Carousel, className)} ref={container}>
      {children}
    </div>
  );
}

export type CarouselCellProps = PropsWithChildren<{
  className?: string;
}>;

export function CarouselCell(props: CarouselCellProps) {
  const { children, className } = props;
  return (
    <div className={classNames(styles.CarouselCell, className)}>{children}</div>
  );
}
