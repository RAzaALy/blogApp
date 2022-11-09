import React from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ data }) => {
  return (
    <>
      {data?.map(({ id, Title, Subtitle, Image }) => (
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={id}>
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={Image}
            />
          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
            {Title}
          </h2>
          <p className="text-base leading-relaxed mt-2">{Subtitle}</p>
          <nav className="list-none flex items-center justify-between">
            <li className="text-xs text-gray-400">
              Posted on October 6th 2021
            </li>

            <li className="text-red-700 tracking-widest">
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
          <Link
            to={`/blog/${id}`}
            className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer"
          >
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
