import { Divider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { Navbar } from "./Navbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Divider borderColor="#00A0DC" mt={0} mb={4} />
      {children}
    </>
  );
};
