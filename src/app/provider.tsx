"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  styles: {
    global: () => ({}), // 전역 Chakra 스타일 제거
  },
});

export function Provider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
