import { Fragment } from "react";
import PageHead from "../common/PageHead";
import NavbarPage from "./Navbar/Navbar";
import FooterPage from "./Footer/Footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const LayoutPage = (props) => {
  const { children, title } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <main className="flex flex-col min-h-screen">
        <NavbarPage />
        <div className={`${geistMono.className} lg:p-6 p-4 lg:mt-4 lg:mb-8 `}>
          {children}
        </div>
        <FooterPage />
      </main>
    </Fragment>
  );
};
export default LayoutPage;
