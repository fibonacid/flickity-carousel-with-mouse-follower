import gsap from "gsap";
import {
  forwardRef,
  PropsWithChildren,
  Ref,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./Cursor.module.css";
import { classNames } from "./utils/classNames";

export type CursorProps = PropsWithChildren<{
  className?: string;
  width?: number;
  height?: number;
}>;

export type CursorAPI = {
  moveTo(x: number, y: number): void;
  animate(vars: GSAPTweenVars): void;
};

function Cursor(props: CursorProps, ref: Ref<CursorAPI>) {
  const { children, className, width = 32, height = 32 } = props;
  const elementRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      moveTo: (x, y) => {
        gsap.set(elementRef.current, {
          x: x - width / 2,
          y: y - height / 2,
        });
      },
      animate(vars) {
        gsap.to(elementRef.current, vars);
      },
    };
  });

  return (
    <div
      ref={elementRef}
      className={classNames(styles.Cursor, className)}
      style={{ width, height }}
    >
      {children}
    </div>
  );
}

export default forwardRef(Cursor);
