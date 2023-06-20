import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";

const terms = () => {
  return (
    <div>
      <Head>
        <title>Nardo Alts • Terms</title>
      </Head>
      {/* Terms and condiotons*/}
      <div className="mx-3 lg:mx-0 p-4 rounded-lg bg-[#121112] border border-[#282c34] hover:border-[#93969e] h-fit">
        <div className="text-xl text-center">TERMS OF SERVICE</div>
        <div className="mt-4 text-sm text-gray-500">{`As a buyer of Nardo Alts’s products and services, it is your obligation and responsibility to read the terms of service in their entirety. By reading, conceptualizing, and accepting such terms you are further bound by such terms and no exceptions will be afforded to you.`}</div>
        <div className="mt-3">{`Terms & Conditions`}</div>
        <div className="text-gray-500 text-[12px] py-2">
          <div>{`• You must not change any information on the account. (name/email/password). Unless specified in the account description. If changed, warranty will be voided`}</div>
          <div>{`• No Refunds. If an account doesn’t work, contact Live Chat within 3 hours of purchase date to exchange a non-working account into a valid account`}</div>
          <div>{`• If an account stops working after the 1 hours, Nardo Alts and any parties associated are not entitled to replace it.`}</div>
          <div>{`• All sales are final.`}</div>
        </div>
        <div className="mt-3">{`Shop Terms`}</div>
        <div className="text-gray-500 text-[12px] py-2">
          <div>{`• These are cracked accounts. The info may change after sale or after a certain period of time. We hold no responsibility with what you do with these accounts. THE WARRANTY UNLESS STATED OTHERWISE IS 1 HOUR FROM TIME OF SALE TO THE TIME YOU FIRST MAKE THE TICKET. If you contact us over the 1 hour mark, we will not replace or credit you.`}</div>
        </div>
        <div className="mt-3">{`Legal`}</div>
        <div className="text-gray-500 text-[12px] py-2">
          <div>{`• The goods and products from this proposed store are for educational and promotional use only. They impose reality and are not intended to be used as such. No illegal means are intended. Nardo Alts and all parties associated rescind all liability regarding the buyers usage going forward.`}</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default terms;
