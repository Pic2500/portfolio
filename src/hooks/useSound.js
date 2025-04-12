import { useCallback } from "react";

const useSound = (url) => {
  const play = useCallback(() => {
    const audio = new Audio(url);
    audio.play();
  }, [url]);

  return play;
};

export default useSound;
