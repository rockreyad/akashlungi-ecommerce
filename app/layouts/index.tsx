import Footer from "~/components/Footer";
import TopHeader from "~/components/navbars/TopHeader";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <TopHeader />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
