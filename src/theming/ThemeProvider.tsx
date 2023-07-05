import { FC, PropsWithChildren } from "react";
import { ThemeProvider as ThemeProviderOG } from "@chakra-ui/react";
import { theme } from "./theme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProviderOG theme={theme}>{children}</ThemeProviderOG>
);
