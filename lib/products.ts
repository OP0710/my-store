export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Max",
    price: 4999,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://t4.ftcdn.net/jpg/05/06/36/71/360_F_506367145_aTN8tLqtKXDYxzHQs5DH4HGsbVT9OgMn.jpg",
    ],
    description: "Premium running shoes",
  },
  {
    id: "2",
    name: "T-Shirt",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1",
    ],
    description: "Comfort cotton wear",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 2999,
    images: [
      "https://i.ytimg.com/vi/IkA__8S93cc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDzFm2X82NsGNLwRBCaLGrtoZeIyg",
      "https://preview.redd.it/329-apple-watch-vs-50-smartwatch-v0-va5gxi6mxkse1.jpg?width=1080&crop=smart&auto=webp&s=ef25511a3b4a2777dd764f8f456a77b8c5d2851b",
    ],
    description: "Track your fitness",
  },
];