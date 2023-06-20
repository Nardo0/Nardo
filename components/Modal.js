import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import Image from "next/image";

const Modal = (props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {props?.children ? (
          props?.children
        ) : (
          <button className="Button violet">Open Modal</button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal className="">
        <Dialog.Overlay className="DialogOverlay z-50 " />
        <Dialog.Content className="DialogContent z-50 overflow-x-hidden nothumb select-none">
          <Dialog.Title className="DialogTitle">Products</Dialog.Title>

          <div className="mt-5 text-white">
            {props?.data?.map((item, index) => (
              <div key={index}>
                <div className="border-t border-[#282c34]"></div>
                <div className="py-2 flex items-center justify-between">
                  <div className="flex flex-row items-center">
                    <div className="border border-[#ffffff3d] h-10 w-14 rounded-md overflow-hidden">
                      <Image
                        width={1000}
                        height={500}
                        className="object-cover h-10 w-14"
                        alt="product image"
                        src={
                          item?.productImage
                            ? `https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${item?.productImage}/shopitem`
                            : "https://cdn.discordapp.com/attachments/969048974919102464/1008494797490749610/support.gif"
                        }
                      />
                    </div>
                    <div className="flex flex-col ml-2 justify-between">
                      <div className="text-gray-200 text-[14px]">
                        {item?.productTitle ? item?.productTitle : "No Title"}
                      </div>
                      <div className="flex flex-row items-center gap-4">
                        <div className="text-[12px] text-green-500">{`Price: ${
                          item?.productPrice == -1
                            ? `NotFound`
                            : `${item?.productPrice} $`
                        }`}</div>
                        {item?.productStock != 0 ? (
                          <div className="text-[#696969] text-[12px]">{`Stock: ${
                            item?.productStock == -1 ? `∞` : item?.productStock
                          }`}</div>
                        ) : (
                          <div className="text-[#802828] text-[12px]">{`Stock: ${
                            item?.productStock == -1 ? `∞` : item?.productStock
                          }`}</div>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* buy btn */}
                  <Dialog.Close asChild>
                    <div>
                      <button
                        data-sellix-product={item?.productID}
                        type="submit"
                        alt="Buy Now with sellix.io"
                        className="p-1.5 px-3 bg-gradient-to-r border border-[#ffffff38] from-[#575656] to-[#2b2a2a] rounded-lg text-sm z-50"
                      >
                        Buy
                      </button>
                    </div>
                  </Dialog.Close>
                </div>
              </div>
            ))}
          </div>

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
