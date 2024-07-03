/* eslint-disable no-useless-catch */
import apiClient from "./API";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/bp/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await apiClient.post("/bp/products", productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await apiClient.put(`/bp/products/${id}`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await apiClient.delete(`/bp/products?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyProductId = async (id) => {
  try {
    const response = await apiClient.get(`/bp/products/verification?id=${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
