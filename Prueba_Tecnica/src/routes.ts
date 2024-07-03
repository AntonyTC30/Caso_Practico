import { lazy, LazyExoticComponent, ReactNode } from "react";

const ProductTable = lazy(() => import("./components/tabla/ProductTable"));
const ProductForm = lazy(() => import("./components/from/ProductFrom"));

export const ROUTES = {
  productTable: {
    es_MX: "/productos",
    element: ProductTable,
    title: { es_MX: "Productos" },
  },
  addProduct: {
    es_MX: "/productos/agregar",
    element: ProductForm,
    title: { es_MX: "Agregar Producto" },
  },
  editProduct: {
    es_MX: "/producto/editar/:id",
    element: ProductForm,
    title: { es_MX: "Editar Producto" },
  },
};
