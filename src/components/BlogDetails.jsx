import React from "react";
import { useGetBlogQuery } from "../services/finsApi";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetBlogQuery(id);

  if (isFetching) return <h1 classNameName="text-center">Loading...</h1>;

  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex items-center justify-between">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl text-center font-medium title-font mb-4 text-gray-900">
              {data?.Title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {data?.Article}
            </p>
            <nav className="list-none flex items-center justify-center w-3/4">
             

              <li className="text-gray-700">
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
                  {id} views
                </span>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-center mb-24">
          <img src={data?.Image} alt="Cardimage" className="w-3/4 h-96" />
        </div>
      </section>
      <section className="text-gray-600 body-font ">
        <div class="container px-5 py-24 mx-auto flex justify-center items-center w-3/4">
          <div class="-my-8 divide-y-2 divide-gray-100">
            <div class="py-8 flex flex-wrap md:flex-nowrap">
              <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                  {data?.Title}
                </h2>
                <p class="leading-relaxed">{data?.Subtitle}</p>
                <Link to='/' class="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
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
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-24">
          <img src={data?.Image} alt="Secondimage" className="w-3/4 h-96" />
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
