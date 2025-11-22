import { useEffect, useRef } from "react";

export const useAutoScroll = <T>(dependency: T) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dependency]);

  return scrollRef;
};
