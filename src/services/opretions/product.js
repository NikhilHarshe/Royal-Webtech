import toast from "react-hot-toast";
import { apiConnector } from "../apiconnector";
import { productEndpoints } from "../apis";

const {
    CREATE_PRODUCT_API,
    EDIT_PRODUCT_API,
    GET_ALL_PRODUCTS_API,
    GET_PRODUCT_DETAILS_API,
    DELETE_PRODUCT_API
} = productEndpoints;

export const addProduct = (data, Token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", CREATE_PRODUCT_API, data, {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${Token}`,
            });

            if (!response?.data?.success) {
                throw new Error("Could Not Create Product");
            }

            toast.success("Product Created");
            // You can dispatch some success action here if needed
            return response?.data?.data;
        } catch (error) {
            toast.error(error.message || "Error creating product");
            throw error;
        } finally {
            toast.dismiss(toastId);
        }
    };
};

export const editProductData = (data, Token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", EDIT_PRODUCT_API, data, {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${Token}`,
            });

            if (!response?.data?.success) {
                throw new Error("Could Not Update Product Details");
            }

            toast.success("Product Updated");
            // You can dispatch some success action here if needed
            return response?.data?.data;
        } catch (error) {
            toast.error(error.message || "Error updating product");
            throw error;
        } finally {
            toast.dismiss(toastId);
        }
    };
};

export const getAllProducts = () => {
    return async (dispatch) => {
        // const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("GET", GET_ALL_PRODUCTS_API);

            if (!response?.data?.success) {
                throw new Error("Could Not Fetch Product data");
            }

            // toast.success("Products Fetched");
            // You can dispatch some success action here if needed
            return response?.data?.data;
        } catch (error) {
            toast.error(error.message || "Error fetching products");
            throw error;
        } finally {
            // toast.dismiss(toastId);
        }
    };
};

export const fetchProductDetails = (ProductId) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", GET_PRODUCT_DETAILS_API, { ProductId });

            if (!response.data.success) {
                throw new Error(response.data.message);
            }

            // toast.success("Product Details Fetched");
            // You can dispatch some success action here if needed
            return response.data;
        } catch (error) {
            toast.error(error.message || "Error fetching product details");
            throw error;
        } finally {
            toast.dismiss(toastId);
        }
    };
};

export const deleteProduct = (ProductId, Token) => {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("DELETE", DELETE_PRODUCT_API, { ProductId }, {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Token}`,
            });

            if (!response?.data?.success) {
                toast.error("Could Not Delete Product");
                throw new Error("Could Not Delete Product");
            }

            toast.success("Product Deleted");
            // You can dispatch some success action here if needed
            return response?.data;
        } catch (error) {
            toast.error(error.message || "Error deleting product");
            throw error;
        } finally {
            toast.dismiss(toastId);
        }
    };
};
