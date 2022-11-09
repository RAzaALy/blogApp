import React from "react";
import { useGetBlogsQuery } from "../services/finsApi";
import { BlogCard, Banner } from ".";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, isFetching } = useGetBlogsQuery();
  if (isFetching) return <h1 className="text-center">Loading...</h1>;
  console.log(data, "data");
  return (
    <>
     <Banner />
      <div className="mx-auto mb-4 flex justify-center items-center w-full imgContainer">
        <Link
          to='/'
          class="flex flex-col md:flex-row bg-white hover:bg-gray-100 border shadow-md items-center imgContainer"
        >
          <img
            class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="./images/cardImg.png"
            alt="cardImg"
          />
          <div class="p-4 flex flex-col justify-between leading-normal">
            <span>
              <nav className="list-none flex items-center justify-between">
                <li className="text-xs text-gray-400">
                  Posted on October 6th 2021
                  <span class="text-gray-400 mr-3 inline-flex items-center ml-3 leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    563 views
                  </span>
                </li>

                <li className="text-red-700 tracking-widest">Featured</li>
              </nav>
            </span>
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Should I Buy a New Car or Lease a New Car in 2021?
            </h5>
            <p class="font-normal text-gray-700 mb-3">
              We provide a full range of front end mechanical repairs for all
              makes and models of cars, no matter the cause. This includes, We
              provide a full range of front end mechanical.
            </p>
            <Link to='/' class="text-indigo-500 inline-flex items-center mt-4">
              Read More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </Link>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <BlogCard data={data} />
           
          </div>
        </div>
        <button class="flex mx-auto mt-16 mb-16 text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
          Load More
        </button>
      </section>
    </>
  );
};

export default Blog;
