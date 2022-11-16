export type products = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: categories;
  dateAdded?: string;
};

const enum categories {
  LUNGI,
  SHAREE,
}

export const productData: products[] = [
  {
    id: 1,
    name: "A premium lungi",
    price: 100,
    description: "Product 1 description",
    image:
      "https://i.picsum.photos/id/364/200/300.jpg?hmac=p9DQJ7EeVALsbnav-G_BYdU2et5ocKd4Qg_xwXjSc0k",
    category: categories.LUNGI,
    dateAdded: "2021-01-01",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Product 2 description",
    image: "https://picsum.photos/200/300",
    category: categories.LUNGI,
    dateAdded: "2021-01-03",
  },
  {
    id: 3,
    name: "Product 3",
    price: 60,
    description: "Product 3 description",
    image:
      "https://i.picsum.photos/id/90/200/300.jpg?hmac=yKaRyhG3EFez3DuYnuPdh29pSCXLc8DDXROYdKQQp30",
    category: categories.LUNGI,
    dateAdded: "2021-01-02",
  },
  {
    id: 4,
    name: "Product 4",
    price: 870,
    description: "Product 4 description",
    image:
      "https://i.picsum.photos/id/34/200/300.jpg?hmac=K076uH4zC5xneqvhRayjS90G00xjPsR7eL_ShGEr6rs",
    category: categories.LUNGI,
    dateAdded: "2021-01-04",
  },
  {
    id: 5,
    name: "Product 5",
    price: 650,
    description: "Product 5 description",
    image:
      "https://i.picsum.photos/id/871/200/300.jpg?hmac=wXN1u0NeBnK8vCkjkJXzoTfZn6F0JBzgOpCdmRGXsw0",
    category: categories.LUNGI,
    dateAdded: "2021-01-05",
  },
  {
    id: 6,
    name: "Product 6",
    price: 1060,
    description: "Product 6 description",
    image: "https://picsum.photos/200/300",
    category: categories.LUNGI,
    dateAdded: "2021-01-06",
  },
];
