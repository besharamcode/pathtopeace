import { Suspense } from "react";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Loader from "./UI/Loader";

// eslint-disable-next-line react/prop-types
const HeaderRoutes = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-[4vw]">
        {<Suspense fallback={<Loader />}>{children}</Suspense>}
      </main>
      <Footer />
    </>
  );
};

export default HeaderRoutes;
