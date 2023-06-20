import React from "react";
import Image from "next/image";
import Modal from "./Modal";

const Card = (data) => {
  function getSmallestAmount(arr) {
    return arr[0]?.productPrice;
  }

  return (
    <div
      draggable
      className="p-4 h-fit rounded-lg bg-[#121112] border border-[#282c34] hover:border-[#93969e] flex flex-col gap-y-4 select-none"
    >
      {/* Product Image */}
      <div>
        <Image
          className="w-full"
          width={200}
          height={200}
          src={
            data?.data?.groupImage
              ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${data?.data?.groupImage}/shopitem`
              : "https://cdn.discordapp.com/attachments/969048974919102464/1008494797490749610/support.gif"
          }
          draggable="false"
          alt="Product Image"
        />
      </div>
      {/* Product Title */}
      <div className="text-lg product-title">{data?.data?.groupTitle}</div>
      {/* price and buy Button */}
      <div className="flex w-full flex-row items-center justify-between">
        <div className="text-[#919090]">{`Starting @ ${getSmallestAmount(
          data?.data?.productsData
        )} $`}</div>
        <Modal data={data?.data?.productsData}>
          <button
            title={`Buy ${data?.data?.groupTitle}`}
            className="p-1.5 px-3 bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm"
          >
            Buy Now
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Card;
