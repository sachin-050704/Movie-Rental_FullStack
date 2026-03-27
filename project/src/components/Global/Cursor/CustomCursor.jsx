import { useEffect, useRef } from "react";
import classes from "./Cursor.module.css";
import { FaArrowPointer } from "react-icons/fa6";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const onPointerOver = (e) => {
      const target = e.target.closest("[data-cursor='grow']");
      if (target) {
        cursor.classList.add(classes.grow);
      }
    };

    const onPointerOut = (e) => {
      const target = e.target.closest("[data-cursor='grow']");
      if (target) {
        cursor.classList.remove(classes.grow);
      }
    };

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <div ref={cursorRef} className={classes.cursor}>
      <div className={classes.arrdot}></div>
      <span className={classes.arrow}>
          <FaArrowPointer />
        </span>
    </div>
  );
};

export default CustomCursor;
