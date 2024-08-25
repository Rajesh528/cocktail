import React, { createContext, ReactNode, useState } from "react";
interface Product {
  name: string;
  id: number;
}
interface ProductContextType {
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}
export const  ProductContext = createContext<ProductContextType | undefined>(undefined);
interface ProductProviderProp {
    children:ReactNode
}


export const ProductProvider: React.FC<ProductProviderProp> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    
  let addProduct = (newProduct: any) => {
    setProducts([...products, newProduct]);
  };
  let deleteProduct = (id: number) => {
    setProducts(products.filter((product: Product) => product.id !== id));
  };
  return (
    <ProductContext.Provider value={{products,addProduct,deleteProduct,}}>
        </ProductContext.Provider>
  )
};


 




