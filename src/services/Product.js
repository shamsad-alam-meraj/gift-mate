import { baseUrl } from "@/config/apiUrlConfig";
import SuperFetch from "@/helpers/SuperFetch";
const Product = {
  getProducts: async (page = 1, limit = 8) =>
    await SuperFetch(`${baseUrl.product}?page=${page}&limit=${limit}`),
};

export default Product;
