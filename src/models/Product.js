import axios from "axios";

const apiProducts = axios.create({
  baseURL: 'http://localhost:8000/api/products',
});

const Products = {
  async getProducts() {
    try {
      const response = await apiProducts.get('/');
      return response.data;
    } catch (error) {
      console.error('Error while fetching products:', error);
      return [];
    }
  },

  async getProductById(id) {
    try {
      const response = await apiProducts.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching product with ID ${id}:`, error);
      return null;
    }
  },

  async getProductsByShopId(shopId) {
    try {
      const response = await apiProducts.get(`/shop/${shopId}`);
      return response.data;
    } catch (error) {
      console.error(`Error while fetching products with Shop ID ${shopId}:`, error);
      return [];
    }
  },

  async createProduct(productData) {
    try {
      const response = await apiProducts.post('/', productData);
      return response.data;
    } catch (error) {
      console.error('Error while creating a product:', error);
      return null;
    }
  },

  async updateProduct(productId, productData) {
    try {
      const response = await apiProducts.put(`/${productId}`, productData);
      return response.data;
    } catch (error) {
      console.error(`Error while updating product with ID ${productId}:`, error);
      return null;
    }
  },

  async deleteProduct(productId) {
    try {
      await apiProducts.delete(`/${productId}`);
      return true;
    } catch (error) {
      console.error(`Error while deleting product with ID ${productId}:`, error);
      return false;
    }
  },
};

export default Products;
