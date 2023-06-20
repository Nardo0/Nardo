import fetch from "node-fetch";

export default async function handler(req, res) {
  const SellixApi = "https://dev.sellix.io/v1/groups";
  const SellixKey =
    "PMxKMN5seLEOA3DiDcQlnZMsqtCqDLYdkLzbNlsnJ3u6tgMxRmhBf8QKetRz0Ckn";

  // const SellixKey =
  //   "uc8kzuIfp7d5quRb5pQJzdsnEoRajr8kDqqAfH5Wg10iK9Ro1Udj8JaCwUW9ACdD";

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
