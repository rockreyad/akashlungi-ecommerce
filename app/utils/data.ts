export type products = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: categories;
  dateAdded?: string;
  discount?: number;
  discountPrice?: number;
  hot?: boolean;
};

const enum categories {
  LUNGI,
  SHAREE,
}

export const productData: products[] = [
  {
    id: 7,
    name: "A premium lungi",
    price: 100,
    description: "Product 7 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/lungi/o/a/a/free-violet-micro-box-lungi-mr-lungi-original-imaggctnrgebk9n8.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-01",
  },
  {
    id: 1,
    name: "A premium lungi",
    price: 1000,
    description: "Product 1 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/lungi/n/w/h/free-blue-stripe-lungi-mr-lungi-original-imaghtvwjqhw6yfu.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-01",
    discount: 10,
    discountPrice: 900,
  },
  {
    id: 2,
    name: "lore dolor sit amet",
    price: 20,
    description: "Product 2 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/lungi/j/g/o/free-light-brown-box-lungi-mr-lungi-original-imaghzrfnt9vzb5p.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-03",
    hot: true,
  },
  {
    id: 3,
    name: "Product 3",
    price: 60,
    description: "Product 3 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/l29c9e80/lungi/o/1/o/free-madras-check-lungis-mr-lungi-original-imagdn23zyuzyn2n.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-02",
  },
  {
    id: 4,
    name: "Product 4",
    price: 870,
    description: "Product 4 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/lungi/y/j/s/free-stripe-lungi-mr-lungi-original-imaghxf9ugkyqmhh.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-04",
    discount: 15,
    discountPrice: 740,
    hot: true,
  },
  {
    id: 5,
    name: "Product 5",
    price: 650,
    description: "Product 5 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/xif0q/dhoti/c/p/n/free-rkvpl9-green-tee-original-imagghxzagspyjfb.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-05",
  },
  {
    id: 6,
    name: "Product 6",
    price: 1060,
    description: "Product 6 description",
    image:
      "https://rukminim1.flixcart.com/image/416/416/koudfgw0/lungi/d/k/o/free-cotton-fancy-multi-colors-printed-men-regular-ware-2-meters-original-imag37h9hwztpfcj.jpeg?q=70",
    category: categories.LUNGI,
    dateAdded: "2021-01-06",
  },
];
