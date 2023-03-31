import { useEffect, useState } from "react"

export const useSmallerDevice = (maxWidth: number) => {
  const [isSmaller, setIsSmaller] = useState<boolean>(false);

  useEffect(() => {

    const update = () => setIsSmaller(!(window.innerWidth > maxWidth));

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return [isSmaller];
} 