import React, { createContext } from "react";
import { GrFormClose } from "react-icons/gr";
import CartItem from "~/components/CartItem";
import { useCartProvider } from "./CartContext";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const loader: LoaderFunction = async () => {
  if (localStorage.getItem("cart") !== null) {
    let localCart;
    localCart = JSON.parse(localStorage.getItem("cart") as string);
    return localCart;
  }
};

interface ContextType {
  isOpen: Boolean;
  toggleSidebar: Function;
}
// create context
export const SidebarContext = createContext<ContextType | null>(null);
SidebarContext.displayName = "SidebarContext";

const SidebarProvider = (props: any) => {
  const data = useLoaderData();
  console.log("LOCALDATA", data);

  // cart context
  const { cart } = useCartProvider();

  // sidebar state
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }} {...props}>
      {isOpen ? (
        <div className="fixed inset-0 w-full z-20">
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-20"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <div className="w-11/12 md:w-4/12 lg:w-3/12 h-full fixed right-0 z-30 bg-white p-4">
            <button className="border-0" onClick={() => setIsOpen(!isOpen)}>
              <GrFormClose size="1.5rem" />
            </button>
            <div className="h-4/6 overflow-y-auto">
              {cart.length
                ? cart.map((cartItem) => <CartItem product={cartItem} />)
                : "Your cart is empty"}
            </div>
            <div className="mt-4">
              <div className="py-4 rounded-md shadow">
                <h3 className="text-xl font-bold text-blue-600">
                  Order Summary
                </h3>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Subtotal</span>
                  <span className="font-bold">$35.25</span>
                </div>
                <div className="flex justify-between px-4">
                  <span className="font-bold">Discount</span>
                  <span className="font-bold text-red-600">- $5.00</span>
                </div>

                <div
                  className="
            flex
            items-center
            justify-between
            px-4
            py-2
            mt-3
            border-t-2
          "
                >
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold">$37.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebarProvider = () => {
  const context = React.useContext(SidebarContext) as ContextType;
  if (context === undefined) {
    throw new Error("useSidebarProvider must be used within a SidebarProvider");
  }
  return context;
};

export default SidebarProvider;
