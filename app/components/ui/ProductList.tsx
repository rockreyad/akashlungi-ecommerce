import { products } from "~/utils/data";
import ProductCard from "../cards/ProductCard";

type ProductListProps = {
  products: products[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {products && products.length > 0 ? (
          <>
            {products.map((item) => (
              <ProductCard
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))}
          </>
        ) : (
          "no prodcuts found!"
        )}
      </div>
    </>
  );
};

export default ProductList;
