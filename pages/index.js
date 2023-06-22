import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductJson from "../Products.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Product_Type = [
  "All Products",
  "Top Featured",
  "Food",
  "Shopping",
  "Travel",
  "Streaming",
];

const FilteredCategory = {
  topProducts: [
    "Instacart",
    "Groupon",
    "Casey's",
    "Mejier",
    "StubHub",
    "Pilot Flying J",
    "Lenovo",
    "Atom Tickets",
  ],
  food: [
    "iHop",
    "Jersey Mikes",
    "Sonic Drive-In",
    "Buffalo Wild Wings",
    "Smoothie King",
    "Subway",
    "Wendy's",
    "H-E-B",
    "CafeRio",
    "Del Taco",
    "Firehouse Subs",
    "Waitr",
    "Potbelly",
    "Goldbelly",
    "WayBack Burgers",
    "ColdStone",
    "Kung Fu Tea",
  ],
  shopping: [
    "PetMeds",
    "Revolve",
    "Sephora",
    "Express",
    "Under Armour",
    "Boxed",
    "Fabletics",
    "Rue21",
    "Hot Topic",
    "theCut",
    "Five Below",
  ],
  travel: ["Booking.com", "MGM Resorts", "Hertz", "Frontier Airlines"],
  streaming: [
    "DAZN",
    "Crunchyroll",
    "Disney Plus",
    "Spotify Premium",
    "HBO Max",
  ],
  fullAccess: [],
};

export default function Home() {
  const [ProductCategory, setProductCategory] = useState("All Products");
  const [Products, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [Search, setSearch] = useState(null);

  // API useEffect
  useEffect(() => {
    (async () => {
      // if there are no products then run the effect to get products
      if (FilteredProducts?.length == 0) {
        let res = await fetch("/api/getProducts").then((result) =>
          result.json()
        );

        setProducts(res?.data);
        setFilteredProducts(res?.data);
      } else {
        setCategoryProducts(Products);
      }
    })();
  }, [ProductCategory]);

  //Search bar useEffect
  useEffect(() => {
    (async () => {
      // Searching for keyword gave in search bar
      let SearchedArr = [];

      Products.forEach((GroupProduct) => {
        if (
          GroupProduct?.groupTitle.toLowerCase().includes(Search.toLowerCase())
        ) {
          SearchedArr.push(GroupProduct);
        }
      });

      setFilteredProducts(SearchedArr);
    })();
  }, [Search]);

  function setCategoryProducts(orginalProductsArray) {
    let FilteredProd = [];

    if (ProductCategory === "All Products") {
      setFilteredProducts(orginalProductsArray);
    } else if (ProductCategory === "Top Featured") {
      // filtering products

      FilteredProd = orginalProductsArray.filter((result) =>
        FilteredCategory?.topProducts?.includes(result?.groupTitle)
      );

      setFilteredProducts(FilteredProd);
    } else if (ProductCategory === "Food") {
      // filtering products

      FilteredProd = orginalProductsArray.filter((result) =>
        FilteredCategory?.food?.includes(result?.groupTitle)
      );

      setFilteredProducts(FilteredProd);
    } else if (ProductCategory === "Shopping") {
      // filtering products

      FilteredProd = orginalProductsArray.filter((result) =>
        FilteredCategory?.shopping?.includes(result?.groupTitle)
      );

      setFilteredProducts(FilteredProd);
    } else if (ProductCategory === "Travel") {
      // filtering products

      FilteredProd = orginalProductsArray.filter((result) =>
        FilteredCategory?.travel?.includes(result?.groupTitle)
      );

      setFilteredProducts(FilteredProd);
    } else if (ProductCategory === "Streaming") {
      // filtering products

      FilteredProd = orginalProductsArray.filter((result) =>
        FilteredCategory?.streaming?.includes(result?.groupTitle)
      );

      setFilteredProducts(FilteredProd);
    }
  }

  function HandleSearchBar(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Head>
        <title>Nardo Alts • Home</title>
      </Head>
      {/* Banner Image */}
      <div className="w-full flex justify-center px-5 sm:px-0">
        <Image
          width={1000}
          height={1000}
          alt="offical banner image"
          src={"https://s12.gifyu.com/images/SQmAx.gif"}
        />
      </div>
      {/* Search Bar */}
      <div className="mt-6 px-5 sm:px-[140px]">
        <input
          onChange={HandleSearchBar}
          placeholder="Search any product..."
          className="bg-[#121112] duration-200 focus:border-gray-400 border border-[#353535] rounded-md p-2 w-full outline-none text-[12px] sm:text-[14px] sm:py-3 text-gray-300"
        />

        {/* Category */}
        <div className="mt-4 flex items-row gap-3 w-full justify-center select-none flex-wrap">
          {Product_Type?.map((items, index) => (
            <div
              key={index}
              onClick={() => setProductCategory(items)}
              className="cursor-pointer text-[12px] text-gray-400 bg-[#121112] w-fit rounded-[4px] border border-[#646464] p-1 px-3 duration-200 hover:text-gray-200 hover:border-gray-300"
            >
              {items}
            </div>
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="mt-5 px-4 md:px-0">
        <div className="text-2xl text-gray-200">{ProductCategory}</div>
        {/* line */}
        <div className="w-full border-t mt-3 border-gray-600"></div>
        {/* Showing products from here */}
        <div className="mt-5 w-full grid grid-row grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {FilteredProducts?.map((item, index) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
