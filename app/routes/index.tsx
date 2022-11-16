import Banner from "~/components/cards/Banner";
import Collection from "~/components/cards/Collection";
import Product from "~/components/cards/Product";
import Filter from "~/components/Filter";
import ProductDetails from "~/components/ui/ProductDetails";
import ProductList from "~/components/ui/ProductList";
import { productData } from "~/utils/data";

export default function Index() {
  return (
    <div>
      Index page Details
      <ProductList products={productData} />
    </div>
  );
}
