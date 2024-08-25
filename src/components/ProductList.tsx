// src/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../store/slices/productSlice';
import { Product } from '../store/types';

const ProductList: React.FC = () => {
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);
  const error = useAppSelector((state) => state.product.error);
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: products.length + 1, // This will be replaced by the server-generated ID
      name,
      price,
    };
    dispatch(addProduct(newProduct));
    setName('');
    setPrice(0);
  };

  const handleUpdateProduct = (product: Product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
  };

  const handleSaveUpdate = () => {
    if (editingProduct) {
      const updatedProduct = { ...editingProduct, name, price };
      dispatch(updateProduct(updatedProduct));
      setEditingProduct(null);
      setName('');
      setPrice(0);
    }
  };

  const handleDeleteProduct = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (${product.price})
            <button onClick={() => handleUpdateProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editingProduct ? 'Update Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <button onClick={editingProduct ? handleSaveUpdate : handleAddProduct}>
        {editingProduct ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default ProductList;
