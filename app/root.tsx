import type { MetaFunction, LinksFunction } from "@remix-run/node";

import styles from "~/styles/app.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import SidebarProvider from "./context/SidebarContext";

import Layout from "./layouts";
import CartProvider from "./context/CartContext";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <Document>
      <CartProvider>
        <SidebarProvider>
          <Layout>
            {/* <ThemeProvider> */}
            <Outlet />
            {/* </ThemeProvider> */}
          </Layout>
        </SidebarProvider>
      </CartProvider>
    </Document>
  );
}

function Document({
  children,
  title = `New Remix App`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        <div className="overflow-hidden">
          {/* <Header /> */}
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <div className="error-container text-red-500">
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </div>
      </Layout>
    </Document>
  );
}

// 60
export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Uh-oh!">
      <Layout>
        <div className="container mx-auto px-4 text-semibold bg-rose-100 text-red-500 mt-10 rounded-md">
          <h1>App Error</h1>
          <pre>{error.message}</pre>
        </div>
      </Layout>
    </Document>
  );
}
