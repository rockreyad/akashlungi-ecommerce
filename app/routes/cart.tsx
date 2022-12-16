import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react/dist/components/dialog/dialog";
import React, { Fragment } from "react";
import CartItem from "~/components/CartItem";
import { CloseIcon } from "~/components/ui/icons";
import ProductCart from "~/components/ui/ProductCart";

const cart = () => {
  return (
    <>
      <div>
        {/* <CartItem item={} /> */}
        <ProductCart />
      </div>
    </>
  );
};

export default cart;
