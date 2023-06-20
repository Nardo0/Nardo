import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { PlusIcon } from "@radix-ui/react-icons";
import Footer from "../components/Footer";

//  joinging classse
function JoinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  const [OpenFaq, setOpenFaq] = useState(null);

  function SetFaqOpen(text) {
    if (text === "Q1") {
      if (OpenFaq === "Q1") {
        setOpenFaq(null);
      } else {
        setOpenFaq("Q1");
      }
    } else if (text === "Q2") {
      if (OpenFaq === "Q2") {
        setOpenFaq(null);
      } else {
        setOpenFaq("Q2");
      }
    } else if (text === "Q3") {
      if (OpenFaq === "Q3") {
        setOpenFaq(null);
      } else {
        setOpenFaq("Q3");
      }
    } else if (text === "Q4") {
      if (OpenFaq === "Q4") {
        setOpenFaq(null);
      } else {
        setOpenFaq("Q4");
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Nardo Alts • FAQ</title>
      </Head>
      <div className="mx-3 lg:mx-0 p-4 rounded-lg bg-[#121112] border border-[#282c34] hover:border-[#93969e] h-fit">
        <div className="w-full flex flex-col items-start p-2 sm:p-10">
          {/* FAQ questions */}
          {/* Question 1 */}
          <div className="w-full">
            <div
              onClick={() => SetFaqOpen("Q1")}
              className="text-gray-200 flex flex-row items-center justify-between font-bold py-4 border-t border-b border-[#292929] w-full px-[5px] cursor-pointer"
            >
              <div>How can we trust you?</div>
              <div
                className={JoinClasses(
                  OpenFaq === "Q1" ? "rotate-[135deg]" : "rotate-0",
                  "text-white font-bold duration-200"
                )}
              >
                <PlusIcon height={18} width={18} />
              </div>
            </div>
            <div
              className={JoinClasses(
                OpenFaq === "Q1" ? "h-fit py-4" : "h-0",
                "overflow-hidden duration-200 text-[#969595] text-[15px] "
              )}
            >
              {`The site is managed by Highly Reputated Owners , we have our old shop but we shifted to our own site . our old site URL was "https://nardo.atshop.io/" which was Very trusted shop`}
            </div>
          </div>
          {/* Question 2 */}
          <div className="w-full">
            <div
              onClick={() => SetFaqOpen("Q2")}
              className="text-gray-200 flex flex-row items-center justify-between font-bold py-4 border-t border-b border-[#292929] w-full px-[5px] cursor-pointer"
            >
              <div>What if I need support or have questions?</div>
              <div
                className={JoinClasses(
                  OpenFaq === "Q2" ? "rotate-[135deg]" : "rotate-0",
                  "text-white font-bold duration-200"
                )}
              >
                <PlusIcon height={18} width={18} />
              </div>
            </div>
            <div
              className={JoinClasses(
                OpenFaq === "Q2" ? "h-fit py-4" : "h-0",
                "overflow-hidden duration-200 text-[#969595] text-[15px] "
              )}
            >
              {`Join our Telegram server and Contact us thorugh our ticket or you can contact on website support system which you can find bottom right corner Chat icon`}
            </div>
          </div>
          {/* Question 3 */}
          <div className="w-full">
            <div
              onClick={() => SetFaqOpen("Q3")}
              className="text-gray-200 flex flex-row items-center justify-between font-bold py-4 border-t border-b border-[#292929] w-full px-[5px] cursor-pointer"
            >
              <div>Can I change information on the account?</div>
              <div
                className={JoinClasses(
                  OpenFaq === "Q3" ? "rotate-[135deg]" : "rotate-0",
                  "text-white font-bold duration-200"
                )}
              >
                <PlusIcon height={18} width={18} />
              </div>
            </div>
            <div
              className={JoinClasses(
                OpenFaq === "Q3" ? "h-fit py-4" : "h-0",
                "overflow-hidden duration-200 text-[#969595] text-[15px] "
              )}
            >
              {`We don't gurantee you any thing after account has left our hands.`}
            </div>
          </div>
          {/* Question 4 */}
          <div className="w-full">
            <div
              onClick={() => SetFaqOpen("Q4")}
              className="text-gray-200 flex flex-row items-center justify-between font-bold py-4 border-t border-b border-[#292929] w-full px-[5px] cursor-pointer"
            >
              <div>{`What if i didnt got my order?`}</div>
              <div
                className={JoinClasses(
                  OpenFaq === "Q4" ? "rotate-[135deg]" : "rotate-0",
                  "text-white font-bold duration-200"
                )}
              >
                <PlusIcon height={18} width={18} />
              </div>
            </div>
            <div
              className={JoinClasses(
                OpenFaq === "Q4" ? "h-fit py-4" : "h-0",
                "overflow-hidden duration-200 text-[#969595] text-[15px] "
              )}
            >
              {`This may happen sometimes, please join the Telegram and create a
              ticket with proof and we will provide a product.`}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
