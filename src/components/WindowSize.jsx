import { useState, useEffect } from "react";

export default function WindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    
    window.addEventListener("resize", handleResize);
    // Set initial size immediately (resize event only fires on change)
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array = run once on mount

  return <p>Window: {size.width} x {size.height}px</p>;
}