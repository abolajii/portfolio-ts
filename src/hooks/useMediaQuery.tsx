import { useEffect, useState } from "react";

interface MediaQueryProps {
  minWidth?: number;
  maxWidth?: number;
}

const useMediaQuery = ({ minWidth, maxWidth }: MediaQueryProps): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const queryParts: string[] = [];
    if (minWidth) queryParts.push(`(min-width: ${minWidth}px)`);
    if (maxWidth) queryParts.push(`(max-width: ${maxWidth}px)`);
    const mediaQuery = queryParts.join(" and ");

    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setIsMatch(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", documentChangeHandler);

    // Set the initial value
    setIsMatch(mediaQueryList.matches);

    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [minWidth, maxWidth]);

  return isMatch;
};

export default useMediaQuery;
