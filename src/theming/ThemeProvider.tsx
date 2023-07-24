import { FC, PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderOG, extendTheme } from "@chakra-ui/react";

/* Extend theming from here */
export const theme = extendTheme({});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProviderOG theme={theme}>{children}</ThemeProviderOG>
);
