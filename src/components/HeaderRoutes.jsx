import Header from "./UI/Header";

// eslint-disable-next-line react/prop-types
const HeaderRoutes = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-[4vw]">{children}</main>
    </>
  );
};

export default HeaderRoutes;
