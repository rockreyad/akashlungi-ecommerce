import Footer from "~/components/Footer";
import Header from "~/components/navbars/Header";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      {/* <header> */}
      <Header />
      {/* </header> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
