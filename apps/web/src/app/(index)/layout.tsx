import MainLayout from "@/src/components/layout/main";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
