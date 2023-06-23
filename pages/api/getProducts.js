import fetch from "node-fetch";

export default async function handler(req, res) {
  const SellixApi = "https://dev.sellix.io/v1/groups";
  const SellixKey =
    "ZRfBhRG2RKqOgFeoRkMypHzIVwFbCD7cODS3nLee9RK35YnAWqueSlNYpxom4lnM";

  // const SellixKey =
  //   "ZRfBhRG2RKqOgFeoRkMypHzIVwFbCD7cODS3nLee9RK35YnAWqueSlNYpxom4lnM";

  const response = await fetch(SellixApi, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${SellixKey}`,
    },
  });
  const response_result = await response.json();

  let DATA = [];

  const rawData = response_result?.data;

  rawData?.groups?.forEach((group) => {
    let products = [];

    group?.products_bound?.forEach((product) => {
      products.push({
        productID: product?.uniqid,
        productImage: group?.cloudflare_image_id,
        productPrice: product?.price,
        productTitle: product?.title,
        productStock: product?.stock,
      });
    });

    DATA?.push({
      groupTitle: group?.title,
      groupImage: group?.cloudflare_image_id,
      productsData: products,
    });
  });

  res.status(200).json({ data: DATA });
}
