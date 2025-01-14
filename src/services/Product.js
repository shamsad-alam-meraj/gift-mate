import { baseUrl } from "@/config/apiUrlConfig";
import SuperFetch from "@/helpers/SuperFetch";
const Product = {
  getProducts: async (page = 1, limit = 8, query = "") =>
    await SuperFetch(
      `${baseUrl.product}?page=${page}&limit=${limit}${
        query !== "" ? `?search=${query}` : ""
      }`
    ),
  getProductBySearch: async (query = "") =>
    await SuperFetch(`${baseUrl.product}?search=${query}`),
};

export default Product;
