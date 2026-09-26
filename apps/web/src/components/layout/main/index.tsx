import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
