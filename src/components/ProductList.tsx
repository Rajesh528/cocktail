// src/components/ProductList.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/reducers';
// import { addProduct, updateProduct, deleteProduct } from '../store/slices/productSlice';
import { Product } from '../store/types';
import { addProduct, deleteProduct, updateProduct } from '../store/slices/productsSlice';

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
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

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
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
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={e => setPrice(Number(e.target.value))}
      />
      <button onClick={editingProduct ? handleSaveUpdate : handleAddProduct}>
        {editingProduct ? 'Save' : 'Add'}
      </button>
    </div>
  );
};

export default ProductList;
