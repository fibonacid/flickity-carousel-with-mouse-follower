import { useEffect, useRef } from "react";
import Cursor, { CursorAPI } from "./Cursor";

export type MouseCursorProps = {};

export default function MouseCursor(props: MouseCursorProps) {
  const cursorRef = useRef<CursorAPI>(null);

  useEffect(() => {
    const handleMouseEvent = (event: MouseEvent) => {
      cursorRef.current?.moveTo(event.clientX, event.clientY);
    };
    window.addEventListener("mousemove", handleMouseEvent);
    return () => {
      window.removeEventListener("mousemove", handleMouseEvent);
    };
  }, []);

  return <Cursor ref={cursorRef} />;
}
