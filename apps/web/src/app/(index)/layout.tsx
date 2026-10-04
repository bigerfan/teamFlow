import MainLayout from "@/src/features/layout/main";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
