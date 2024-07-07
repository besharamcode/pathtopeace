import { Suspense } from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";

// eslint-disable-next-line react/prop-types
const HeaderRoutes = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-[4vw] flex-1">{<Suspense>{children}</Suspense>}</main>
      <Footer />
    </>
  );
};

export default HeaderRoutes;
