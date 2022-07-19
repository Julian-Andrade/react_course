import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef;

  useDebugValue("--- CUSTO HOOK E USEDEBUGVALUE ---");
  useDebugValue("O número anterior é: " + value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
