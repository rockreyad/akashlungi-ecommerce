import { config } from "~/config";
import { ProductsType } from "~/utils/data";
import FeatureProductCard from "../cards/FeatureProductCard";

const imageURL = config.STRAPI_UPLOAD_URL_BASE;
const BestSelling = ({ products }: { products: ProductsType }) => {
  return (
    <div className="space-y-10 w-full">
      <h1 className="text-2xl text-center font-bold font-futura">
        Our Best Selling Products
      </h1>
      <div className="flex justify-center">
        <section className="flex flex-nowrap snap-mandatory snap-x snap-always overflow-x-auto gap-5 hide-scrollbar">
          {/* <ProductCart /> */}
          {products.data?.length
            ? products.data
                .filter((item) => item.attributes.type === "featured")
                .map((product) => (
                  <div className="flex-none snap-center">
                    <FeatureProductCard
                      name={product.attributes.name}
                      price={product.attributes.price}
                      image={
                        product.attributes?.images?.data?.length
                          ? imageURL +
                            product.attributes?.images?.data[0]?.attributes?.url
                          : ""
                      }
                      shortDesc={product.attributes.shortDesc}
                    />
                  </div>
                ))
            : null}
        </section>
      </div>
    </div>
  );
};

export default BestSelling;
