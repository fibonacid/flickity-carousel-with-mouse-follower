import { DragEvent, useEffect, useRef } from "react";
import Cursor, { CursorAPI } from "./Cursor";

export type MouseCursorProps = {};

export default function MouseCursor(props: MouseCursorProps) {
  const cursorRef = useRef<CursorAPI>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorRef.current?.moveTo(event.clientX, event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Cursor ref={cursorRef} />;
}
